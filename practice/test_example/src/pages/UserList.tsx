import { useContext } from "react";
import { UserContext } from "../Context/context";
import { Link } from "react-router";

export default function UserList() {
    const {users} = useContext(UserContext);
    if (users.length === 0) {
        return <p className="text-center mt-4">No users available.</p>;
      }
      return (
        <div className="max-w-2xl mx-auto mt-8 px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            User List
          </h2>
          <ul className="grid gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="border rounded-xl p-4 shadow hover:shadow-md transition bg-white"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-500">ID: {user.id}</p>
                  <Link
                    to={`/users/${user.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View Details →
                  </Link>
                </div>
                <p className="text-lg font-medium text-gray-900">{user.name}</p>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">
                  Age: <span className="font-semibold">{user.age ?? "N/A"}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
      
}