import { useParams } from "react-router"
import { UserContext } from "../Context/context"
import { useContext } from "react"

export default function UserDetail() {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const user = users.find((u) => u.id === Number(id));
    if (!user) {
        return <p className="text-center mt-4">User not found.</p>;
    }
    return (
        <div className="max-w-md mx-auto mt-10 px-4">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              User Detail
            </h2>
      
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500 font-medium">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
      
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500 font-medium">Email:</span>
                <span className="text-gray-900">{user.email}</span>
              </div>
      
              <div className="flex justify-between">
                <span className="text-gray-500 font-medium">Age:</span>
                <span className="text-gray-900">{user.age ?? "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      );
      
}