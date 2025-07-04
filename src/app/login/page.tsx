"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image"

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const userRole = "admin"; // ← nanti kamu ganti dari backend

        localStorage.setItem("userRole", userRole);

        router.push("/portal");
        console.log({ email, password });
    };

    return (
        <main className="min-h-screen grid grid-cols-1 md:grid-cols-3">
            {/* Kiri: Gambar / Branding */}
            <div className="hidden md:flex items-center justify-center bg-gray-100 p-10 md:col-span-2">
                <Image
                    src="/globe.svg"
                    alt="ERP Illustration"
                    className="max-w-md w-full"
                    width={500}
                    height={500}
                />
            </div>

            {/* Kanan: Form Login */}
            <div className="flex items-center justify-center p-10">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-3xl font-bold text-center text-brand">
                        Selamat Datang
                    </h1>
                    <p className="text-center text-gray-500">Masuk ke akun ERP kamu</p>

                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                                placeholder="email@domain.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-blue-800 transition cursor-pointer"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}