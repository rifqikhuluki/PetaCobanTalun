"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Memuat komponen peta secara dinamis
const StoryMapSidecar = dynamic(() => import("./StoryMapSidecar"), {
  ssr: false,
});

export default function StoryMapWrapper() {
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Memanfaatkan Intersection Observer agar peta baru dimuat saat user scroll mendekati fold peta
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderMap(true);
          observer.disconnect(); // Matikan observer setelah peta sukses dimuat sekali
        }
      },
      { rootMargin: "200px" }, // Peta mulai di-load ketika user berjarak 200px sebelum area peta
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px]">
      {shouldRenderMap ? (
        <StoryMapSidecar />
      ) : (
        /* Tampilan Placeholder Ringan selama Peta Belum Dimuat */
        <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-medium text-slate-500 tracking-wide">
            Menyiapkan Peta Interaktif...
          </p>
        </div>
      )}
    </div>
  );
}
