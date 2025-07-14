import { Link, NavLink } from "react-router";


export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="font-bold text-lg">
                    User Management
                </Link>
                <div className="flex space-x-4 mr-10">
                    <NavLink
                        to="/users"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/users/form"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }
                    >
                        UserForm
                    </NavLink>
                    {/* <NavLink
                        to="/users/:id"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "hover:text-yellow-300"
                        }
                    >
                        UserDetail
                    </NavLink> */}

                </div>
            </div>
        </nav>
    );
}
