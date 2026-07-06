// import Navbar from "../components/NavBar";
// import HeroSection from "../components/HeroSection";
// import DescriptionSection from "../components/DescriptionSection";
// import StoryMapSidecar from "../components/StoryMapSidecar";

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
//       {/* Import CSS Leaflet */}
//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
//         integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
//         crossOrigin=""
//       />

//       {/* Komponen-Komponen yang Sudah Dipecah */}
//       <Navbar />
//       <HeroSection />
//       <DescriptionSection />
//       <StoryMapSidecar />
//     </main>
//   );
// }
import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import DescriptionSection from "../components/DescriptionSection";
import StoryMapWrapper from "../components/StoryMapWrapper";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Import CSS Leaflet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <Navbar />
      <HeroSection />
      <DescriptionSection />

      {/* Panggil wrapper-nya di sini */}
      <section className="w-full h-screen block relative">
        <StoryMapWrapper />
      </section>
      <Footer />
    </main>
  );
}
