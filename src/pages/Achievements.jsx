import { useState } from "react";
import { Search, Filter } from "lucide-react";

const achievements = [
  {
    title: "Belajar Dasar Pemrograman Javascript",
    org: "Dicoding Indonesia",
    date: "May 19, 2025 - May 19 2028",
    img: "/certs/dicoding-dasar-javascript.jpg",
    link: "https://www.dicoding.com/certificates/1RXYE8RLQZVM",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    org: "Dicoding Indonesia",
    date: "January 2025",
    img: "/certs/dicoding-dasar-web.jpg",
    link: "https://www.dicoding.com/certificates/L4PQE4064PO1",
  },
  {
    title: "Belajar Dasar Pemrograman dengan Java",
    org: "Dicoding Indonesia",
    date: "May 2025",
    img: "/certs/dicocing-dasar-java.jpg",
    link: "https://www.dicoding.com/certificates/1RXYE8TRQZVM",
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    org: "Dicoding Indonesia",
    date: "May 2025",
    img: "/certs/dicoding-cloud-aws.png",
    link: "https://www.dicoding.com/certificates/JMZVE70MRPN9",
  },
  {
    title: "CCNA: Introduction to Networks course",
    org: "Cisco Networking Academy",
    date: "19 Desember 2024",
    img: "/certs/ccna-introduction-networks.jpg",
    link: "https://www.credly.com/badges/58e0d233-ad2a-4557-89da-718c50c48373/public_url",
  },
  {
    title: "Wireframing in UI/UX Design",
    org: "MySkill Short Class",
    date: "May 2025",
    img: "/certs/myskill-uiux-wireframing.jpg",
    link: "",
  },
  {
    title: "Data Visualization with Looker Data Studio",
    org: "MySkill Short Class",
    date: "May 2025",
    img: "/certs/MySkill-Data-Visualization-with-Looker-Data-Studio.png",
    link: "",
  },
  {
    title: "Guide to Learn SQL with AI at DQLab",
    org: "DQLab (berkolaborasi dengan Xeratic dan Universitas Multimedia Nusantara)",
    date: "05 Mei 2025",
    img: "/certs/dqlab-sql-ai.jpg",
    link: "",
  },
  {
    title:
      "Juara 2 Lomba Desain Poster bertema Keselamatan dan Kesehatan Kerja (K3)",
    org: "STIKES Mitra Husada Karanganyar",
    date: "February 2025",
    img: "/certs/penghargaan-juara2-desain-poster-k3.png",
    link: "",
  },
  {
    title:
      "Peserta Lomba desain poster dengan tema “Keselamatan dan Kesehatan Kerja",
    org: "Himpunan Mahasiswa Program Studi Keselamatan dan Kesehatan Kerja (K3), STIKES Mitra Husada Karanganyar",
    date: "February 2025",
    img: "/certs/peserta-kompetisi-desain-poster.jpg",
    link: "",
  },
  {
    title: "Participant Infographic Poster, 4C National Competition 2024",
    org: " Universitas Brawijaya",
    date: "December 2025",
    img: "/certs/peserta-4C-2024-bidang-poster-infografis.jpg",
    link: "",
  },
  {
    title: "Sertifikat Praktek Kerja Lapangan",
    org: "Dinas Komunikasi dan Informatika Kabupaten Klaten",
    date: "20 Juni 2022 – 24 September 2022",
    img: "/certs/pkl-diskominfo-klaten.jpg",
    link: "",
  },
  {
    title:
      "Sertifikat Panitia Kegiatan Goes to School #6 (Introduction and Basic Training on Arduino Microcontrollers) ",
    org: "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
    date: "20 Mei 2024",
    img: "/certs/panitia-gts6.jpg",
    link: "",
  },
  {
    title:
      "Sertifikat Panitia Kegiatan Goes to School #7 (Let's Learn Future Technology with IoT) ",
    org: "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
    date: "20 Februari 2025",
    img: "/certs/panitia-gts7.png",
    link: "",
  },
  // Tambahkan item lain seperti di gambar...
];

const Achievements = () => {
  const [search, setSearch] = useState("");

  const filteredAchievements = achievements.filter((ach) =>
    ach.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-1 text-white">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      <p className="mb-8 text-gray-400">
        A collection of certificates and badges that I have earned throughout my
        professional journey.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search achievements..."
            className="w-full px-4 py-2 bg-white bg-opacity-5 border border-white/10 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-white/20"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white bg-opacity-5 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition">
          <Filter className="w-4 h-4" />
          Filter achievements
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAchievements.map((ach, index) => (
          <a
            key={index}
            href={ach.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white bg-opacity-5 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
          >
            <img
              src={ach.img}
              alt={ach.title}
              className="w-full object-cover h-48"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{ach.title}</h3>
              <p className="text-sm text-gray-400">{ach.org}</p>
              <p className="text-xs text-gray-500">{ach.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
