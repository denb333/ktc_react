/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from 'react';

import { apiClient } from '../lib/api-client';
import { useAuthStore } from '../authStore/useAuthStore';
import { useNavigate } from 'react-router';
import type { Task } from '../types/auth';

export default function Tasks() {
    const { logOut, access_token, refresh_token, changeAccessToken, changeRefreshToken, loggedInUser } = useAuthStore((state) => state);
    const [tasks, setTasks] = React.useState<any[]>([]);
    
    const hasPermission = loggedInUser?.roles.some((role) => ['Administrators', 'Managers'].includes(role.name));
    //   const navigate = useNavigate();
    console.log("hasPermission: ", loggedInUser?.roles[0].name);
    const navigate = useNavigate();


    useEffect(() => {

        const logged = localStorage.getItem('auth-storage');
        if (!logged) {
            navigate('/login');
        }
    }, [loggedInUser, navigate])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const tasks = (await apiClient.get('/workspaces/tasks',)) as any[];
                console.log(tasks);
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    //   React.useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const task = (await apiClient.get('/workspaces/tasks/49647')) as any;
    //         console.log(task);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);
    //   React.useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const task = (await apiClient.get('/workspaces/tasks/49647')) as any;
    //         console.log(task);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

    const handleChangeAccessToken = async () => {
        await changeAccessToken();
    };

    const handleChangeRefreshToken = async () => {
        await changeRefreshToken();
    };
    return (
        <div className="pt-6 px-4 w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-center bg-blue-300 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                    📋 Dashboard
                </h2>
               
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
                            {tasks.map((task: Task) => (
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
                                        {hasPermission && (
                                            <>
                                                <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs" onClick={() => navigate(`/tasks/${task.id}/edit`)}>
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-xs">
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}