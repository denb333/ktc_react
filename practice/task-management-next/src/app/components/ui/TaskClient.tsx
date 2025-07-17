'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';


interface TasksData {
  id: string;
  title: string;
  description: string;
  status: string;
}

const TasksClient = () => {
  //Lấy session từ client component
  const { data: session } = useSession();

  console.log('<<=== 🚀 TasksClient session ===>>', session);

  const [data, setData] = useState<TasksData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        /**
         * Có thể sử dụng access token từ session để gọi Backend API.
         * Ví dụ: const token = session?.user.accessToken;
         * const res = await fetch('https://server.aptech.io/workspaces/tasks', {
            headers: {
                Authorization: `Bearer session?.user.accessToken`,
            },
            });

         * Tuy nhiên cách này làm lộ access token trong trình duyệt.
         * Nên sử dụng server-side rendering hoặc API route để bảo mật hơn.
         */
        const res = await fetch('/api/tasks'); 
        /**
         * Gọi trung gian qua Router Handler ==> app\api\tasks\route.ts
         * Router Hanlder lấy token từ session sau đó gọi đến Backend API
         */
        if (!res.ok) throw new Error('Lỗi khi lấy dữ liệu task');
        const task = await res.json();
        setData(task.data);
      } catch (err: any) {
        setError(err.message || 'Lỗi không xác định');
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return <div>Không có dữ liệu</div>;
  return (
    <div className="pt-6 px-4 w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center bg-blue-300 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    📋 Dashboard
                </h2>
                {/* <button className="ml-4 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs px-4 py-2" onClick={() => {
                    logOut();
                    router.push('/login');
                }}>Đăng xuất</button> */}
            </div>

            <div className="flex justify-end mb-4">{/* SearchTask ở đây nếu có */}</div>

            <div className="rounded-lg shadow border border-gray-200 bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50 sticky top-0 z-10">
                            <tr className="text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
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
                        <tbody className="text-center text-sm text-gray-800 divide-y divide-gray-200">
                            {data.map((task: any) => (
                                <tr key={task.id} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-2">{task.id}</td>
                                    <td className="px-4 py-2">{task.title}</td>
                                    <td className="px-4 py-2">{task.description || "..."}</td>
                                    <td className="px-4 py-2">{task.priority}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${task.status === "done"
                                                ? "bg-green-100 text-green-700"
                                                : task.status === "in_progress"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {task.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">{task.due_date?.split("T")[0]}</td>
                                    <td className="px-4 py-2">{task.assignee_id}</td>
                                    <td className="px-4 py-2 flex justify-center space-x-2">
                                        <button

                                            className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs"
                                        >
                                            Edit
                                        </button>
                                        <button

                                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default TasksClient;
