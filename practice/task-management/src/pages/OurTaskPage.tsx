import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../coponents/context';
import { getTasks } from '../services';
import { useNavigate } from 'react-router';
import { deleteTask } from '../services';
import type { Task } from '../types/type';
import SearchTasks from '../coponents/SearchTasks';

export default function OurTaskPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [filters, setFilters] = useState<any>({
    status: '',
    priority: '',
  });
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      console.log(tasks);
      setTasks(tasks);
    };
    fetchTasks();
  }, []);
  const handleOnEdit = (taskId: number) => {
    // Logic to handle task edit
    navigate(`/update-task/${taskId}`);
  };
  const handleOnSearch = (filters: { status?: string; priority?: string }) => {
    // Logic to filter tasks based on status and priority
    console.log('Filters applied:', filters);
    // You can implement the filtering logic here or pass it to a service function
    setFilters(filters);
  };

  const filteredTasks = tasks.filter((task: Task) => {
    let matches = true;

    if (filters.status && task.status !== filters.status) {
      matches = false;
    }

    if (filters.priority && task.priority !== filters.priority) {
      matches = false;
    }

    return matches;
  });
  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(prevTasks => prevTasks.filter(task => (task.id !== id)));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task. Please try again.');
    }
  }
  return (
    <div className="pt-6 px-4 w-full relative">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 fixed top-20 left-0 right-0">
        📋 Danh sách công việc
      </h2>

      {/* Phần nút và form nằm cùng hàng */}
      <div className="mt-28 px-4 flex flex-row items-center justify-between space-x-20 fixed top-20 ">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md h-12 min-w-[120px]"
          onClick={() => navigate('/create-task')}
        >
          Create Task
        </button>
        <div className="flex-grow">
          <SearchTasks onSearch={handleOnSearch} />
        </div>
      </div>

      {/* Table hiển thị bên dưới */}
      <div className=" overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr className="text-center text-gray-700 text-sm uppercase tracking-wider">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm text-gray-800">
            {filteredTasks.map((task: Task) => (
              <tr key={task.id} className="hover:bg-gray-100 transition duration-150 border-b border-gray-200">
                <td className="px-4 py-2">{task.id}</td>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description || '...'}</td>
                <td className="px-4 py-2">{task.priority}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${task.status === 'done'
                        ? 'bg-green-100 text-green-700'
                        : task.status === 'in_progress'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2">{task.due_date?.split('T')[0]}</td>
                <td className="px-4 py-2">{task.assignee_id}</td>
                <td className="px-4 py-2 space-x-2">
                  <button onClick={() => handleOnEdit(task.id!)} className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(task.id!)} className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
