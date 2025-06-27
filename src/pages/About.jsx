import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

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
      logo: "/assets/diskominfo-logo.png",
      responsibilities: [
        "Memperbaiki dan mengganti kabel jaringan yang rusak di sepanjang jalan dan titik layanan publik.",
        "Melakukan pengecekan konektivitas dan kestabilan jaringan pasca-perbaikan.",
        "Bekerja dalam tim lapangan dengan menerapkan standar keselamatan kerja dan efisiensi waktu."
      ]
    }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        Pendidikan
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">{edu.institution}</h3>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period} · {edu.location}</p>
            </div>
          </div>
          <button
            className="mt-2 text-blue-600 text-sm underline"
            onClick={() => toggleEduResponsibilities(index)}
          >
            {visibleEduIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleEduIndexes.includes(index) && (
            <>
              <h4 className="mt-2 font-semibold">Tanggung Jawab & Aktivitas:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {edu.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4 className="mt-2 font-semibold">Proyek:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {edu.projects.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h4 className="mt-2 font-semibold">Pencapaian:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {edu.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-8">
        <Briefcase className="w-6 h-6" />
        Pengalaman Karier
      </h2>
      {careerExperiences.map((career, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img src={career.logo} alt={career.company} className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">{career.title}</h3>
              <p className="text-sm">{career.company}</p>
              <p className="text-sm text-gray-500">{career.period} · {career.location}</p>
            </div>
          </div>
          <button
            className="mt-2 text-blue-600 text-sm underline"
            onClick={() => toggleCareerResponsibilities(index)}
          >
            {visibleCareerIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleCareerIndexes.includes(index) && (
            <>
              <h4 className="mt-2 font-semibold">Tanggung Jawab:</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {career.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {career.description && (
                <p className="mt-2 italic text-sm text-gray-600">{career.description}</p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
