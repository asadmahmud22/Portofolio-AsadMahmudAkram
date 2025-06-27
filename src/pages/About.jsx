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
        "Mendesain dan membangun website portofolio menggunakan React, Tailwind CSS, Vite, dan ESLint.",
        "Membangun sistem online exam berbasis web menggunakan HTML, CSS, JavaScript, PHP, dan MySQL."
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
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/himatekkom-logo.png",
      responsibilities: [
        "Menyusun dan mengirimkan surat kerja sama, undangan, dan proposal ke instansi eksternal.",
        "Mengelola media sosial HIMATEKKOM untuk publikasi kegiatan dan informasi penting.",
        "Menjalin komunikasi dengan organisasi lain, sponsor, media partner, serta alumni."
      ],
      description:
        "Himpunan Mahasiswa Teknologi Komputer (HIMATEKKOM) adalah organisasi kemahasiswaan untuk pengembangan minat dan bakat di bidang Teknologi Komputer."
    },
    {
      title: "KPPS Sirekap",
      company: "Komisi Pemilihan Umum (KPU) Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Oct 2024 - Nov 2024",
      type: "Temporary",
      mode: "Onsite",
      logo: "/assets/kpu-logo.png",
      responsibilities: [
        "Memotret formulir C1 plano hasil penghitungan suara.",
        "Mengunggah foto ke aplikasi SIREKAP.",
        "Memastikan data valid dan terunggah dengan benar."
      ]
    },
    {
      title: "Operator Sortir Paket",
      company: "Shopee Express – Distribution Center Solo",
      location: "Solo, Indonesia",
      period: "Aug 2024 - Oct 2024",
      type: "Part-time",
      mode: "Onsite",
      logo: "/assets/shopee-logo.png",
      responsibilities: [
        "Mengelompokkan paket berdasarkan kode pengiriman dan alamat.",
        "Menyusun paket sesuai rute distribusi.",
        "Menjaga alur distribusi tetap efisien dan tepat waktu."
      ]
    },
    {
      title: "Asisten Teknisi Jaringan – PKL",
      company: "Diskominfo Kabupaten Klaten",
      location: "Klaten, Indonesia",
      period: "Jun 2022 - Sep 2022",
      type: "Internship",
      mode: "Onsite",
      logo: "/assets/diskominfo-logo.png",
      responsibilities: [
        "Mengganti kabel jaringan yang rusak.",
        "Mengecek koneksi jaringan pasca-perbaikan.",
        "Bekerja sesuai prosedur K3."
      ]
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-blue-600">
        <GraduationCap className="w-6 h-6" />
        Pendidikan
      </h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-8 border rounded-xl p-4 shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <img src={edu.logo} alt={edu.institution} className="w-14 h-14 object-contain" />
            <div>
              <h3 className="text-lg font-semibold">{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.period} · {edu.location}</p>
            </div>
          </div>
          <button
            onClick={() => toggleEduResponsibilities(index)}
            className="mt-3 text-blue-500 hover:underline text-sm"
          >
            {visibleEduIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleEduIndexes.includes(index) && (
            <div className="mt-2 text-sm text-gray-700 space-y-2">
              <ul className="list-disc list-inside">
                {edu.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="font-semibold mt-2">Proyek:</p>
              <ul className="list-disc list-inside">
                {edu.projects.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="font-semibold mt-2">Prestasi:</p>
              <ul className="list-disc list-inside">
                {edu.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <h2 className="text-3xl font-bold mb-6 mt-10 flex items-center gap-2 text-blue-600">
        <Briefcase className="w-6 h-6" />
        Pengalaman Karier
      </h2>
      {careerExperiences.map((career, index) => (
        <div key={index} className="mb-8 border rounded-xl p-4 shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <img src={career.logo} alt={career.company} className="w-14 h-14 object-contain" />
            <div>
              <h3 className="text-lg font-semibold">{career.title}</h3>
              <p>{career.company}</p>
              <p className="text-gray-500 text-sm">{career.period} · {career.location}</p>
            </div>
          </div>
          <button
            onClick={() => toggleCareerResponsibilities(index)}
            className="mt-3 text-blue-500 hover:underline text-sm"
          >
            {visibleCareerIndexes.includes(index) ? "Sembunyikan Detail" : "Tampilkan Detail"}
          </button>
          {visibleCareerIndexes.includes(index) && (
            <div className="mt-2 text-sm text-gray-700 space-y-2">
              <ul className="list-disc list-inside">
                {career.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {career.description && <p className="italic">{career.description}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
