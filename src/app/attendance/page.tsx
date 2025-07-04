"use client";

export default function AttendancePage() {
    return (
        <main className="min-h-screen flex items-center bg-gray-100 px-4 py-6">
            <div className="max-w-md mx-auto space-y-4">

                {/* Header perusahaan */}
                <div className="bg-blue-50 border border-blue-400 text-blue-800 rounded-xl shadow p-4 border text-center">
                    <h2 className=" text-lg font-semibold text-brand">Arunika Saha Vikasa</h2>
                    <p className="text-xs mt-2.5 text-gray-500">Berjalan Bersama Untuk Tumbuh Bersama</p>
                </div>

                {/* Jadwal Hari Ini */}
                <div className="bg-white rounded-xl shadow p-4 border text-center">
                    <h3 className="text-sm font-medium text-brand mb-2">Presensi Anda Hari Ini</h3>
                    <div className="flex justify-between items-center text-lg font-semibold">
                        <span>08:00</span>
                        <span>• • •</span>
                        <span>17:00</span>
                    </div>
                </div>

                {/* Info Karyawan */}
                <div className="bg-white rounded-xl shadow p-4 border flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                    <div className="flex-1">
                        <h4 className="text-sm font-medium">Karta Matra Kalyana</h4>
                        <p className="text-xs text-gray-500">Field Staff</p>
                    </div>
                    <button className="text-xs text-brand underline"></button>
                </div>

                {/* Presensi Terakhir */}
                <div className="bg-white border text-green-800 rounded-md px-4 py-2 text-sm">
                    <p className="text-xs mt-2.5 text-gray-500">Aktifitas Terakhir</p>
                    Presensi Keluar • Jum, 04 Juli 2024 17:41
                </div>

                {/* Grid Menu */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        "Istirahat",
                        "Lembur",
                        "Cuti",
                        "Izin",
                        "Kunjungan Klien",
                        "Catatan",
                    ].map((label) => (
                        <div
                            key={label}
                            className="bg-white border rounded-lg p-3 text-center text-sm text-gray-600 shadow-sm hover:shadow"
                        >
                            {label}
                        </div>
                    ))}
                </div>

                {/* Tombol Presensi */}
                <button className="w-full py-3 border bg-gray-600 text-white rounded-full font-semibold shadow-md hover:bg-green-700  cursor-pointer transition">
                    Presensi Masuk
                </button>

            </div>
        </main>
    );
}
