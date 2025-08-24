import { apiClient } from '../lib/api-client';
import type { User } from '../types/auth';

export const getUsers = async () : Promise<User[]>=> {
  const result = await apiClient.get('/security/users');
  return result as unknown as User[];
};

export const getUserById = async (id: number): Promise<User> => {
  const result = await apiClient.get(`/security/users/${id}`);
  return result as unknown as User;
};

// export const getRoleByUserId = async (): Promise<User[]> => {
//   const result = await getUsers();
//   console.log('🔍 User data1:', result);
//   const userList = await Promise.all(
//     result.map(async (user: any) => {
//       const userDetails = await getUserById(user.id);
//       console.log('🔍 User data2:', userDetails);
//       return userDetails;
//     })
//   );
//   return userList as unknown as User[];
// };
export const getRoleByUserId = async (): Promise<User[]> => {
  const result = await getUsers();
  const userList: User[] = [];

  for (const user of result) {
    try {
      const userDetails = await getUserById(user.id);
      if (userDetails) {
        userList.push(userDetails);
      }
    } catch (err) {
      console.warn(`⚠️ Lỗi lấy user ID ${user.id}:`, err);
    }
  }

  return userList;
};


export const createUser = async (user: { username: string; password: string; fullName: string }) => {
  const result = await apiClient.post('/security/users', user);
  return result;
};

export const updateUser = async (id: number, user: User) => {
  const result = await apiClient.patch(`/security/users/${id}`, user);
  return result;
};

export const deleteUser = async (id: number) => {
  const result = await apiClient.delete(`/security/users/${id}`);
  return result;
};

export const addRoleToUser = async (id: number|string, role_id: any) => {
  const result = await apiClient.put(`/security/users/${id}/add-role-to-user`, { role_id });
  return result;
};

export const removeRoleFromUser = async (id: number|string, role_id: any) => {
  const result = await apiClient.put(`/security/users/${id}/remove-role-from-user`, { role_id });
  return result;
};