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

  additionalInfo?: {
    phone?: string;
    website?: string;
  };
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
      { label: "Tiket Masuk", price: "Rp12.000" },
      { label: "Camping", price: "Rp15.000" },
    ],
  },
  {
    id: "2",
    name: "Seribu Ayunan",
    description:
      "Spot rekreasi sederhana yang berada di kawasan alam Coban Talun. Lokasi ini cocok untuk bersantai dan menikmati suasana wisata dengan aktivitas ringan.",
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
    htm: [{ label: "Tiket Masuk", price: "Rp5.000" }],
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
  {
    id: "4",
    name: "Pagupon Camp",
    description:
      "Area penginapan dan rekreasi yang berada di kawasan Coban Talun. Dengan lingkungan yang tertata, dikelilingi pepohonan, serta dilengkapi ruang terbuka, lokasi ini cocok untuk menginap, bersantai, dan kegiatan kelompok.",
    coordinates: [-7.8004439847446205, 112.51629540831902],
    gmapsUrl: "https://maps.app.goo.gl/FFhLdyAbTpozwWx8A",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Tempat Parkir",
      "Penginapan",
      "Wi-Fi",
      "Spot Foto",
      "Cafe",
      "Resto",
      "Grill",
      "Area Outbound",
      "Gazebo",
      "Kolam Renang Anak",
      "Musholla",
      "Toilet",
    ],
    additionalInfo: {
      website: "https://paguponcamp.com",
    },
  },
  {
    id: "5",
    name: "Jeep Offroad",
    description:
      "Layanan wisata petualangan di kawasan Coban Talun yang mengajak pengunjung menjelajahi jalur alam menggunakan kendaraan jeep. Area ini dilengkapi basecamp dan titik keberangkatan, sehingga dapat digunakan sebagai lokasi reservasi, briefing, dan awal perjalanan wisata offroad.",
    coordinates: [-7.801087370456821, 112.5164986422744],
    gmapsUrl: "https://maps.app.goo.gl/vQ1XDCbsGYTrxvQ39",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Armada Jeep",
      "Tour & Guide",
      "Rute Wisata Alam",
      "Atraksi Air",
      "Air Mineral & Snack",
      "Dokumentasi",
    ],
    htm: [
      { label: "Jalur Pendek", price: "Rp550.000" },
      { label: "Jalur Sedang", price: "Rp750.000" },
      { label: "Jalur Panjang", price: "Rp850.000" },
    ],
    additionalInfo: {
      website: "https://offroadcobantalun.com",
    },
  },
  {
    id: "6",
    name: "Air Terjun Coban Talun",
    description:
      "Daya tarik utama di kawasan wisata Coban Talun. Spot ini menawarkan suasana alam dengan aliran air terjun, pepohonan, dan area sekitar yang dapat dinikmati untuk berjalan santai, berfoto, maupun menikmati udara terbuka.",
    coordinates: [-7.805302567298079, 112.51725812781171],
    gmapsUrl: "https://maps.app.goo.gl/XUAPRo91SoFPBXuu7",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Air Terjun",
      "Area Alam",
      "Warung",
      "Toilet",
      "Jalur Trekking",
      "Area Piknik",
      "Ojek",
    ],
    htm: [{ label: "Ojek", price: "Rp15.000" }],
  },
  {
    id: "7",
    name: "Apache Camp",
    description:
      "Area penginapan dan kegiatan luar ruang di kawasan Coban Talun. Lokasi ini menyediakan unit penginapan, area terbuka, serta suasana lingkungan yang dikelilingi pepohonan untuk mendukung kegiatan menginap dan aktivitas kelompok.",
    coordinates: [-7.79968832224913, 112.51672897826998],
    gmapsUrl: "https://maps.app.goo.gl/XUAPRo91SoFPBXuu7",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Tempat Parkir",
      "Penginapan",
      "Tempat Makan",
      "Wi-Fi",
      "Toilet",
      "Area Outdoor",
      "Ojek",
    ],
  },
  {
    id: "8",
    name: "Camping Ground 1",
    description: "Area berkemah, area terbuka, titik kegiatan luar ruang.",
    coordinates: [-7.802817659819559, 112.51700650605423],
    gmapsUrl: "https://maps.app.goo.gl/DJzwggbkhRgNM9sS6",
    zoom: 21,
    category: "fasilitas",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: false,
  },
  {
    id: "9",
    name: "Camping Ground 2",
    description: "Area berkemah, area terbuka, titik kegiatan luar ruang.",
    coordinates: [-7.801249485044767, 112.51723927124611],
    gmapsUrl: "https://maps.app.goo.gl/qa5Aqguib4QCiV8N9",
    zoom: 21,
    category: "fasilitas",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: false,
  },
  {
    id: "10",
    name: "Taman Bunga",
    description:
      "Area wisata terbuka di kawasan Coban Talun yang menghadirkan suasana taman dengan berbagai tanaman hias dan jalur pejalan kaki. Area ini cocok untuk berjalan santai, berfoto, serta menikmati suasana hijau di sekitar kawasan wisata.",
    coordinates: [-7.79873854838421, 112.51759329319974],
    gmapsUrl: "https://maps.app.goo.gl/ZbqD1mX9Q9AHfo3C7",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Tempat Parkir",
      "Toilet",
      "Spot Foto",
      "Mushola",
      "Tempat Makan",
      "Area Outbound",
      "Petik Stroberi",
    ],
    htm: [
      { label: "Tiket Masuk", price: "Rp10.000" },
      { label: "Petik Stroberi", price: "Tambahan Rp10.000" },
    ],
  },
  {
    id: "11",
    name: "Alas Pinus",
    description:
      "Area wisata bernuansa alam yang berada di tengah rindangnya hutan pinus Coban Talun. Tempat ini menawarkan suasana sejuk, tenang, dan cocok untuk bersantai, berfoto, maupun berkegiatan bersama rombongan. Di area ini terdapat hamparan tanah beralaskan serasah pinus, area terbuka untuk berkemah atau aktivitas outdoor, serta kafe sederhana yang dapat digunakan pengunjung untuk beristirahat.",
    coordinates: [-7.798430289783492, 112.51743236066248],
    gmapsUrl: "https://maps.app.goo.gl/jafZ3aSP99ECukMA7",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Tempat Parkir",
      "Toilet",
      "Mushola",
      "Spot Foto",
      "Tempat Makan",
      "Area Outbound",
      "Camping Ground",
      "Flying Fox",
      "High Rope",
      "Include Listrik & Lampu",
    ],
    htm: [
      { label: "Camping", price: "Rp25.000/orang" },
      { label: "Flying Fox", price: "Rp15.000/orang" },
      { label: "High Rope", price: "Rp25.000/Orang" },
    ],
  },
  {
    id: "12",
    name: "Rumah Terbalik",
    description:
      "Salah satu spot wisata unik di Coban Talun yang menawarkan bangunan dengan konsep terbalik dan area sekitarnya yang berada di tengah suasana hutan pinus. Tempat ini cocok untuk berfoto, bersantai, dan menikmati suasana alam yang sejuk.",
    coordinates: [-7.797685557505771, 112.51786287830349],
    gmapsUrl: "https://maps.app.goo.gl/mkGWP7mibdmwnpXT9",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: [
      "Tempat Parkir",
      "Toilet",
      "Mushola",
      "Spot Foto",
      "Tempat Makan",
      "Area Outbound",
      "Gazebo",
      "Camping Ground",
      "Paintball",
      "Include Listrik & Lampu",
    ],
    htm: [
      { label: "Outbound", price: "Rp5.000/orang" },
      { label: "Camping", price: "Rp10.000/orang" },
      { label: "Paintball", price: "Rp5.000/Orang" },
    ],
  },
  {
    id: "13",
    name: "OYOT",
    description:
      "Area tempat makan dan beristirahat di kawasan Coban Talun. Area ini memiliki bangunan semi-terbuka, area duduk beratap, serta suasana sekitar yang dikelilingi pepohonan.",
    coordinates: [-7.8016636704714575, 112.51640709994602],
    gmapsUrl: "https://maps.app.goo.gl/DcmwYNHAWNx1RhtH8",
    zoom: 17,
    category: "wisata",
    images: [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&q=80&w=600",
    ],
    hasDetailPage: true,
    facilities: ["Tempat Parkir", "Toilet", "Mushola", "Tempat Makan"],
  },
];
