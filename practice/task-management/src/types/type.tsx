export interface User {
    id: number;
    email: string;
    access_token: string;
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