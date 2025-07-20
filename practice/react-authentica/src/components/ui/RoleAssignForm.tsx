import { useAuthStore } from "../../authStore/useAuthStore";
import { useState } from "react";
import { addRoleToUser, removeRoleFromUser } from "../../services/users.service";

export function RoleAssignForm({ user, roles }: { user: any, roles: any }) {
    const [selectedRoles, setSelectedRoles] = useState(user.roles?.map((role: any) => role.id) || []);
    const { access_token } = useAuthStore();
  
    const handleToggle = async (roleId: number) => {
      if (!access_token) return;
      if (selectedRoles.includes(roleId)) {
        await removeRoleFromUser(user.id, roleId);
        setSelectedRoles((prev: number[]) => prev.filter((id: number) => id !== roleId));
      } else {
        await addRoleToUser(user.id, roleId);
        setSelectedRoles((prev: number[]) => [...prev, roleId]);
      }
    };
  
    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {roles.map((role: any) => (
          <label key={role.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedRoles.includes(role.id)}
              onChange={() => handleToggle(role.id)}
              disabled={!access_token}
            />
            {role.name}
          </label>
        ))}
      </div>
    );
  }