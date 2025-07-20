
export interface Role {
    id: string | number;
    name: string;
}

export interface LoggedInUser {
    id: string | number;
    email: string;
    isActive: boolean;
    roles: Role[];
}
export interface LoginParams {
    username: string;
    password: string;
    navigate: any;
}
export interface AuthState {
    access_token?: string;
    refresh_token?: string;
    loggedInUser?: LoggedInUser;
    loading: boolean;
    error: any;
    login: (params: LoginParams) => Promise<void>;
    logOut: () => Promise<void>;
    changeAccessToken: () => Promise<void>;
    changeRefreshToken: () => Promise<void>;
}

export interface Task {
id?: number;

title: string;
description?: string;

start_date: string;
due_date?: string;

status: 'to_do' | 'in_progress' | 'done';
completed_date?: string;
priority: 'low' | 'medium' | 'high';

assignee_id?: number;

created_by?: number;
created_time: string;

updated_by?: number;
updated_time: string;
}
export interface User{
    id: number;
    fullName: string;
    username: string;
    status: string;
    roles: Role[];
}


