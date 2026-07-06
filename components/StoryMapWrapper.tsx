"use client";

import dynamic from "next/dynamic";

const StoryMapSidecar = dynamic(() => import("./StoryMapSidecar"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center gap-3">
      {/* Spinner Loading Minimalis */}
      <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-xs font-medium text-slate-500 tracking-wide animate-pulse">
        Memuat Peta Interaktif...
      </p>
    </div>
  ),
});

export default function StoryMapWrapper() {
  return <StoryMapSidecar />;
}
