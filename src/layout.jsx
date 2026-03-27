import { Sidebar } from "./components/Sidebar"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Sidebar />
            <div className="md:ml-[260px] transition-all duration-300">
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
