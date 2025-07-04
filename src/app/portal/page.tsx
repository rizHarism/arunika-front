"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PortalPage() {
    const [menus, setMenus] = useState<string[]>([]);
    const [role, setRole] = useState<string | null>(null);
    const router = useRouter()
    useEffect(() => {
        const storedRole = localStorage.getItem("userRole");

        if (!storedRole) {
            window.location.href = "/login";
            return;
        }

        setRole(storedRole);

        // Simulasi menu berdasarkan role
        if (storedRole === "admin") {
            setMenus(["Attendance", "Document Control", "Human Resource", "Assets", "Management App"]);
        } else if (storedRole === "DocumentControl") {
            setMenus(["Attendance", "Document Control"]);
        } else if (storedRole === "HumanResource") {
            setMenus(["Attendance", "Human Resource"]);
        } else {
            setMenus(["Attendance"]);
        }

    }, []);

    return (
        <main className="min-h-screen flex items-center bg-gray-100 ">
            <div className="max-w-4xl mx-auto px-4">
                {/* Card Container */}
                <div className="bg-white rounded-xl shadow-lg p-8 border">
                    <h1 className="text-2xl font-bold text-brand mb-2">Portal ERP</h1>
                    <p className="text-sm text-gray-500 mb-6">Role: {role}</p>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {menus.map((menu) => (
                            <button
                                key={menu}
                                className="relative bg-gray-50 border rounded-lg p-4 hover:shadow-md cursor-pointer text-center"
                                onClick={() => router.push("/attendance")}
                            >
                                {menu.toLowerCase() === "attendance" && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                                        🔔1
                                    </div>
                                )}

                                <span className="font-medium text-gray-700">{menu}</span>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            localStorage.removeItem("userRole");
                            window.location.href = "/login";
                        }}
                        className="mt-6 text-sm text-red-600 underline cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </main >
    );
}
