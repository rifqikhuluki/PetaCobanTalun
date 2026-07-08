"use client";
import { useState } from "react";

export default function DescriptionSection() {
  const images = [
    {
      id: 1,
      src: "/airterjun/2.jpg",
    },
    {
      id: 2,
      src: "/seribuayunan/4.jpg",
    },
    {
      id: 3,
      src: "/jeep/2.jpg",
    },
    {
      id: 4,
      src: "/oyot/1.jpg",
    },
    {
      id: 5,
      src: "/pagupon/6.jpg",
    },
    {
      id: 6,
      src: "/tamanbunga/3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const maxSteps = images.length - 3;

  const nextCarousel = () => {
    setCurrentIndex((prev) => (prev >= maxSteps ? 0 : prev + 1));
  };

  const prevCarousel = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxSteps : prev - 1));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-12">
        {/* KONTEN TEKS DESKRIPSI */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-center md:text-left">
            Pesona Keindahan Alam Coban Talun
          </h2>
          <div className="text-slate-600 space-y-6 text-base md:text-lg font-light leading-relaxed text-justify md:text-left">
            <p>
              <strong className="font-semibold text-slate-800">
                Coban Talun
              </strong>{" "}
              merupakan salah satu destinasi wisata alam air terjun unggulan
              yang terletak di kaki Gunung Arjun-Welirang. Dikelilingi oleh
              hutan pinus yang asri dan sejuk, kawasan ini menawarkan panorama
              alam yang memikat serta udara pegunungan yang sangat menyegarkan.
            </p>
            <p>
              Selain air terjun utamanya yang megah, kawasan wisata ini telah
              berkembang pesat dengan menghadirkan berbagai zona kreatif, area
              perkemahan, taman bunga, hingga fasilitas komunal yang dikelola
              secara terpadu. Perpaduan antara keindahan alam murni dan
              pengelolaan spot modern menjadikannya tempat yang sempurna untuk
              rekreasi keluarga maupun edukasi lingkungan.
            </p>
            <p>
              Melalui peta interaktif di bawah ini, Anda dapat menjelajahi
              titik-titik lokasi penting, mulai dari ragam spot wisata swafoto
              hingga fasilitas umum penunjang kenyamanan kunjungan Anda di
              lapangan.
            </p>
          </div>
        </div>

        {/* CAROUSEL SIMPEL MURNI FOTO */}
        <div className="space-y-6">
          <div className="relative w-full flex items-center">
            {/* Jendela Utama Menahan Card */}
            <div className="overflow-hidden w-full p-2">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (typeof window !== "undefined" && window.innerWidth >= 768 ? 33.333 : 100)}%)`,
                }}
              >
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-1">
                      <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                        <img
                          src={img.src}
                          alt="Dokumentasi Wisata"
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tombol Panah Kiri (Geser 1 Foto) */}
            <button
              onClick={prevCarousel}
              className="absolute -left-4 md:-left-6 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-emerald-600 active:scale-90 transition-all"
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Tombol Panah Kanan (Geser 1 Foto) */}
            <button
              onClick={nextCarousel}
              className="absolute -right-4 md:-right-6 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-emerald-600 active:scale-90 transition-all"
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Indikator Titik Bulat Bawah (Hanya 2 Titik) */}
          <div className="flex justify-center gap-2 pt-2">
            {/* Titik 1: Mewakili Halaman Awal */}
            <button
              onClick={() => setCurrentIndex(0)}
              className={`h-2 rounded-full transition-all duration-350 ${
                currentIndex <= 1 ? "w-6 bg-emerald-600" : "w-2 bg-slate-200"
              }`}
              aria-label="Ke halaman awal"
            />
            {/* Titik 2: Mewakili Halaman Akhir */}
            <button
              onClick={() => setCurrentIndex(maxSteps)}
              className={`h-2 rounded-full transition-all duration-350 ${
                currentIndex > 1 ? "w-6 bg-emerald-600" : "w-2 bg-slate-200"
              }`}
              aria-label="Ke halaman akhir"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
