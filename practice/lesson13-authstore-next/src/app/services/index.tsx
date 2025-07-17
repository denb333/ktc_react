import type { Task } from "../types/auth";
const baseUrl = "https://server.aptech.io";

const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
}

export const login = async (username: string, password: string) => {
    const response = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({username, password}),
    });
    return response.json();
    // return response;
}
export const getTasks= async () => {
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
        method: 'GET',
        headers: defaultHeaders,

    });
    return response.json();
}
export const getTaskById = async (id: number) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
        method: 'GET',
        headers: defaultHeaders,
    });
    return response.json();
}
export const getTaskByAssigneeId = async (id: number) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks/assignee/${id}`, {
        method: 'GET',
        headers: defaultHeaders,
    });
    return response.json();
}

export const createTask = async (task: Task) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(task),
    });
    return response.json();
  };
  export const updateTask = async (id: number,task: Task) => {
    const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
      method: 'PATCH',
      headers: defaultHeaders,
      body: JSON.stringify(task),
    });
    return response.json();
    };
    export const deleteTask = async (id: number) => {
        const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
            method: 'DELETE',
            headers: defaultHeaders,
        });
        return response.json();
    };
    