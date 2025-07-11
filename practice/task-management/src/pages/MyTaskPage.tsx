import { useContext, useEffect, useState } from "react";
import AuthContext from "../coponents/context";
import { getTaskByAssigneeId } from "../services";
import type { Task } from "../types/type";

export default function MyTaskPage() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;
      try {
        const tasks = await getTaskByAssigneeId(user.id);
        setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [user]);

  return (
    <div className="p-6 fixed top-20 left-0 right-0">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        📋 Danh sách công việc của bạn
      </h2>

      <div className="overflow-x-auto max-h-[75vh] overflow-y-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr className="text-center text-gray-700 text-sm uppercase tracking-wider">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Assignee</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm text-gray-800">
            {tasks.map((task: Task) => (
              <tr
                key={task.id}
                className="hover:bg-gray-100 transition duration-150 border-b border-gray-200"
              >
                <td className="px-4 py-2">{task.id}</td>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description || "..."}</td>
                <td className="px-4 py-2">{task.priority}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      task.status === "done"
                        ? "bg-green-100 text-green-700"
                        : task.status === "in_progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {task.due_date?.split("T")[0] || "N/A"}
                </td>
                <td className="px-4 py-2">{task.assignee_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
