import NavBar from "../coponents/NavBar"
import { Outlet } from "react-router"

export default function Layout() {
    return (
        <div className="pt-20 px-4">
            <NavBar />
           <main className="pt-20">
           <Outlet />
           </main>
        </div>
    )
}