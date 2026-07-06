export interface HTMItem {
  label: string;
  price: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [Latitude, Longitude]
  gmapsUrl: string;
  zoom: number;
  category: "wisata" | "fasilitas";
  images: string[];
  hasDetailPage: boolean;
  facilities?: string[];
  htm?: HTMItem[];
}

export const spotsData: Spot[] = [
  {
    id: "1",
    name: "Loket & Pusat Informasi",
    description:
      "Selamat datang di kawasan wisata. Di sini merupakan titik awal perjalanan Anda. Silakan pindai informasi di sekitar atau gunakan tombol rute di bawah untuk panduan arah menuju lokasi parkir terdekat.",
    coordinates: [-7.801760619982164, 112.51793284068793],
    gmapsUrl: "https://maps.google.com/?q=-7.8001,112.5201",
    zoom: 21,
    category: "fasilitas",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: ["Toilet", "Mushola", "Parkir", "Area Kuliner"],
    htm: [
      { label: "Reguler", price: "Rp. 12.000" },
      { label: "Camping", price: "15.000" },
    ],
  },
  {
    id: "2",
    name: "Seribu Ayunan",
    description:
      "Deskripsi untuk destinasi atau fasilitas kedua di kawasan Coban Talun.",
    coordinates: [-7.804370045373565, 112.5163138110459],
    gmapsUrl: "https://maps.app.goo.gl/5EPczMVUpmc9uTNz8",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: ["Taman", "Warung"],
    htm: [{ label: "Reguler", price: "Rp. 5.000" }],
  },
  {
    id: "3",
    name: "Toilet",
    description: "Toilet bagian depan coban talun.",
    coordinates: [-7.801652100686148, 112.51789502139279],
    gmapsUrl: "https://maps.app.goo.gl/W4DE5ricHARFnRmZ6",
    zoom: 21,
    category: "fasilitas",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: false,
  },
];
