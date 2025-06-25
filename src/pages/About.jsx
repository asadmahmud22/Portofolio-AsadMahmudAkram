import { useState } from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const About = () => {
  const [visibleCareerIndexes, setVisibleCareerIndexes] = useState([]);
  const [visibleEduIndexes, setVisibleEduIndexes] = useState([]);

  const toggleCareerResponsibilities = (index) => {
    setVisibleCareerIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleEduResponsibilities = (index) => {
    setVisibleEduIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const education = [
    {
      institution: "Universitas Teknologi Digital Indonesia",
      degree: "Diploma, Teknologi Komputer · GPA 3.79/4.00",
      period: "2023 - 2026",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      logo: "/assets/utdi-logo.png",
      responsibilities: [
        "Meraih Juara 2 dalam lomba desain poster tingkat mahasiswa bertema Keselamatan dan Kesehatan Kerja (K3).",
        "Aktif mengikuti seminar dan workshop pengembangan teknologi komputer, keamanan jaringan, dan inovasi digital.",
        "Aktif mengikuti pelatihan mandiri dan bootcamp di luar kampus yang berfokus pada pengembangan teknologi komputer, keamanan jaringan, pengembangan frontend, dan desain UI/UX.",
        "Aktif terlibat dalam berbagai kepanitiaan organisasi, termasuk himpunan mahasiswa jurusan Teknologi Komputer dan Badan Eksekutif Mahasiswa (BEM) di kampus.",
        "Bertanggung jawab sebagai staf Public Relations HIMATEKKOM dalam mendesain materi publikasi dan mengelola komunikasi eksternal.",
        "Menjadi panitia pelaksana dalam kegiatan pelatihan Arduino dasar yang diselenggarakan oleh HIMATEKKOM di beberapa sekolah mitra.",
        "Berperan aktif dalam kepanitiaan BEM, khususnya dalam divisi acara dan dokumentasi untuk kegiatan kemahasiswaan dan pengembangan soft skill."
      ],
      projects: [
        "Mendesain dan membangun website portofolio menggunakan React, Tailwind CSS, Vite, dan ESLint, serta di-deploy ke Vercel untuk menampilkan karya, sertifikat, dan pengalaman organisasi.",
        "Membangun sistem online exam berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, serta di-hosting di InfinityFree, dengan fitur soal dinamis, penilaian otomatis, dan rekap hasil ujian."
      ],
      achievements: [
        "Dean's List selama 3 semester berturut-turut",
        "Juara 2 lomba desain poster K3 tingkat mahasiswa"
      ]
    }
  ];

  const careerExperiences = [
    {
      title: "Divisi HUMAS Hubungan & Masyarakat",
      company: "Himpunan Mahasiswa Teknologi Komputer - Universitas Teknologi Digital Indonesia",
      location: "Bantul, Daerah Istimewa Yogyakarta",
      period: "Aug 2024 - Present",
      duration: null,
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni."
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) merupakan organisasi mahasiswa di Universitas Teknologi Digital Indonesia yang mewadahi pengembangan minat, bakat, dan keterampilan mahasiswa Teknologi Komputer."
    },
    {
      title: "KPPS Sirekap (Sistem Informasi Rekapitulasi)",
      company: "Komisi Pemilihan Umum (KPU) Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Oct 2024 - Nov 2024",
      duration: "2 months",
      type: "Temporary",
      mode: "Onsite",
      logo: "/assets/kpu-logo.png",
      responsibilities: [
        "Memotret formulir C1 plano yang memuat hasil penghitungan suara.",
        "Mengunggah foto formulir ke aplikasi SIREKAP KPU.",
        "Memastikan data terunggah akurat untuk percepatan rekapitulasi dan transparansi hasil pemilu."
      ]
    },
    {
      title: "Part Time Operator Sortir Paket",
      company: "Distribution Center Solo (Shopee Express)",
      location: "Solo, Indonesia",
      period: "Aug 2024 - Oct 2024",
      duration: "4 months",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/shopee-logo.png",
      responsibilities: [
        "Mengelompokkan paket berdasarkan kode pengiriman, alamat tujuan, dan metode pengiriman.",
        "Menyusun paket sesuai rute distribusi untuk memudahkan proses pengantaran.",
        "Bekerja sama dengan tim lain dalam menjaga alur distribusi agar tetap efisien dan tepat waktu."
      ]
    },
    {
      title: "Asisten Teknisi Jaringan - Praktik Kerja Lapangan",
      company: "Diskominfo Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Jun 2022 - Sep 2022",
      duration: "4 months",
      type: "Internship",
      mode: "Onsite",
      logo: "/assets/diskominfo-logo.png",
      responsibilities: [
        "Memperbaiki dan mengganti kabel jaringan yang rusak di sepanjang jalan dan titik layanan publik.",
        "Melakukan pengecekan konektivitas dan kestabilan jaringan pasca-perbaikan.",
        "Bekerja dalam tim lapangan dengan menerapkan standar keselamatan kerja dan efisiensi waktu."
      ]
    }
  ];

  // Sisa kode rendering tetap sama seperti sebelumnya.
};

export default About;
