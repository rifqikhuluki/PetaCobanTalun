"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { spotsData } from "@/data/mapData";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function SpotDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const spot = spotsData.find((s) => s.id === id);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!spot) {
    return (
      <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-lg font-bold text-slate-800 mb-2">
          Destinasi Tidak Ditemukan
        </h2>
        <p className="text-xs text-slate-500 mb-6">
          Maaf, detail informasi tidak tersedia.
        </p>
        <button
          onClick={() => router.push("/")}
          className="text-xs font-bold bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-md"
        >
          Kembali ke Peta Utama
        </button>
      </div>
    );
  }

  const nextImage = () => {
    if (spot.images && spot.images.length > 0) {
      setCurrentImgIndex((prev) => (prev + 1) % spot.images.length);
    }
  };

  const prevImage = () => {
    if (spot.images && spot.images.length > 0) {
      setCurrentImgIndex(
        (prev) => (prev - 1 + spot.images.length) % spot.images.length,
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* AREA UTAMA ATAS: NAVBAR DAN SLIDER */}
      <div className="w-full relative flex-shrink-0 bg-slate-900">
        {/* NAVBAR */}
        <div className="absolute top-0 inset-x-0 z-40 bg-gradient-to-b from-black/60 to-transparent pb-8">
          <Navbar />
        </div>

        {/* SLIDER GAMBAR */}
        <div className="w-full h-[45vh] md:h-[60vh] relative overflow-hidden">
          {spot.images && spot.images.length > 0 ? (
            <img
              src={spot.images[currentImgIndex]}
              alt={spot.name}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
              Tidak ada foto
            </div>
          )}

          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          {/* NAVIGASI PANAH (ARROW) */}
          {spot.images && spot.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>

              <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 z-40">
                {spot.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* AREA KONTEN DETAIL UTAMA*/}
      <main className="w-full flex-1 max-w-6xl mx-auto px-6 md:px-1 py-3 md:py-16 space-y-10">
        {/* BAGIAN JUDUL UTAMA */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded ${
                spot.category === "wisata"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {spot.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {spot.name}
          </h1>
        </div>

        {/* DESKRIPSI UTAMA */}
        <div className="text-base md:text-lg text-slate-600 leading-relaxed font-light space-y-4 text-justify">
          <p>
            <strong className="text-slate-900 font-semibold">
              {spot.name}
            </strong>{" "}
            {spot.description}
          </p>
        </div>

        {/* SEPARATOR HALUS */}
        <hr className="border-slate-200" />

        {/* DUA KOLOM UNTUK FASILITAS & HTM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-2">
          {/* FASILITAS BULLET LIST */}
          {spot.facilities && spot.facilities.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-black uppercase tracking-widest">
                Fasilitas Pendukung
              </h3>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-600 font-light list-disc list-inside">
                {spot.facilities.map((facility, idx) => (
                  <li key={idx} className="marker:text-emerald-500 font-medium">
                    <span className="text-slate-600 font-normal ml-2">
                      {facility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* HARGA TIKET (HTM) */}
          {spot.htm && spot.htm.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-black uppercase tracking-widest">
                Informasi Retribusi / HTM
              </h3>
              <div className="space-y-3 divide-y divide-slate-100">
                {spot.htm.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center text-sm md:text-base ${idx > 0 ? "pt-3" : ""}`}
                  >
                    <span className="text-slate-500 font-light">
                      {item.label}
                    </span>
                    <span className="font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {spot.additionalInfo &&
            (spot.additionalInfo.phone || spot.additionalInfo.website) && (
              <div className="col-span-1 md:col-span-2 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xs font-bold text-black uppercase tracking-widest">
                  Informasi Kontak & Layanan
                </h3>
                <div className="flex flex-wrap gap-6 text-sm md:text-base">
                  {/* Jika ada nomor telepon/CP, render bagian ini */}
                  {spot.additionalInfo.phone && (
                    <div className="flex items-center gap-2.5 text-slate-600 font-light">
                      Contact Person :
                      <span>
                        <strong className="text-slate-800 font-normal">
                          {spot.additionalInfo.phone}
                        </strong>
                      </span>
                    </div>
                  )}

                  {/* Jika ada tautan website, render bagian ini */}
                  {spot.additionalInfo.website && (
                    <div className="flex items-center gap-2.5 text-slate-600 font-light">
                      Website :
                      <a
                        href={spot.additionalInfo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:underline font-medium"
                      >
                        {spot.additionalInfo.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>

        {/* TOMBOL TINDAKAN RUTE MAPS */}
        <div className="pt-8 border-t border-slate-200">
          <a
            href={spot.gmapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-full inline-flex items-center justify-center gap-2.5 text-sm font-bold text-white transition-all bg-emerald-600 hover:bg-emerald-700 px-6 py-3.5 rounded-xl text-center shadow-lg shadow-emerald-600/10 hover:scale-[1.01]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Dapatkan Petunjuk Rute Jalan (Google Maps)
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
