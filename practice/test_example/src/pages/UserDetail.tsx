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
        <div className="max-w-md mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">User Detail</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age ?? "N/A"}</p>
        </div>
    );
}