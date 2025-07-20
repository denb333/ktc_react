import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { addRoleToUser, getUserById, removeRoleFromUser, updateUser } from '../services/users.service';
import type { User } from '../types/auth';
const roleNameToIdMap: Record<string, number> = {
    Administrators: 1,
    Managers: 2,
    Members: 3,
    Users: 4,
    Leaders: 7
};

export default function UpdateUserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const mapRoleNameToId = (name: string): number => roleNameToIdMap[name];
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: '',
            username: '',
            status: 'active',
            roles: [],
        }
    });

    const selectedRoles = watch('roles') || [];

    useEffect(() => {
        // Fetch user data by ID
        async function fetchUser() {
            try {
                const data = await getUserById(Number(id)) as unknown as User;
                console.log("data", data);
                setUser(data);
                setValue('fullName', data.fullName);
                setValue('username', data.username);
                setValue('status', data.status);
                setValue('roles', data.roles.map((r: any) => r.name) as never[]);
            } catch (error) {
                console.error('Failed to load user:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [id, setValue]);

    const onSubmit = async (formData: any) => {
        try {
            const { roles: updatedRoleNames, ...userData } = formData;
            await updateUser(Number(id), userData);

            const oldRoleNames = user.roles.map((r: any) => r.name);
            const addedRoles = updatedRoleNames.filter((role: string) => !oldRoleNames.includes(role));
            const removedRoles = oldRoleNames.filter((role: string) => !updatedRoleNames.includes(role));
          await Promise.all(
            addedRoles.map(async (role: string) => {         
                const roleId = mapRoleNameToId(role);
                console.log("id:", Number(id), "role:", role, "roleId:", Number(roleId));
                await addRoleToUser(Number(id), roleId);
            }
          ))
          await Promise.all(
            removedRoles.map(async (role: string) => {
                const roleId = mapRoleNameToId(role);
                console.log("id:", id, "role:", role, "roleId:", roleId);
                await removeRoleFromUser(Number(id), roleId);
            }
          ))
            alert('User updated successfully');
            navigate('/users');

        } catch (err) {
            alert('Error updating user');
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        <p className="text-lg font-medium text-gray-700">Loading user data...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br  py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Update User</h1>
                    <p className="text-gray-600">Edit user information and permissions</p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Full Name Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register('fullName', { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                placeholder="Enter full name"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm flex items-center mt-1">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Full Name is required
                                </p>
                            )}
                        </div>

                        {/* Username Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register('username', { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                                placeholder="Enter username"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm flex items-center mt-1">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Username is required
                                </p>
                            )}
                        </div>

                        {/* Status Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Status
                            </label>
                            <select
                                {...register('status')}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white"
                            >
                                <option value="active" className="py-2">Active</option>
                                <option value="inactive" className="py-2">Inactive</option>
                            </select>
                        </div>

                        {/* Roles Field */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                User Roles
                            </label>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                {Object.keys(roleNameToIdMap).map((role) => (
                                    <label key={role} className="flex items-center space-x-3 cursor-pointer group hover:bg-white rounded-lg p-2 transition-all duration-200">
                                        <input
                                            type="checkbox"
                                            value={role}
                                            {...register('roles')}
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200"
                                            defaultChecked={selectedRoles.includes(role as never)}
                                        />
                                        <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200">
                                            {role}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={() => navigate('/users')}
                                className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span>Cancel</span>
                            </button>

                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Update User</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
