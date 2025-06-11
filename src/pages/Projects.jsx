import React from "react";
import { BadgeCheck, Link } from "lucide-react";

const projects = [
  {
    title: "Personal Website",
    description:
      "Situs pribadi dan portofolio milik As'ad Mahmud Akram, seorang pengembang web yang berfokus pada frontend development. Dibuat menggunakan React, Tailwind CSS, dan Vite, serta di-deploy melalui Vercel, situs ini menampilkan profil, keahlian, layanan, hingga proyek-proyek yang pernah dikerjakan secara profesional dan modern.",
    image: "/projects/site.png",
    tech: ["react", "tailwind", "eslint", "vite", "vercel"],
    featured: true,
    link: "https://asadmahmudakram.vercel.app",
  },
  {
    title: "Online Exam Siswa",
    description:
      "Aplikasi Online Exam Siswa adalah sistem ujian berbasis web yang memungkinkan siswa untuk login dan mengikuti ujian secara online dengan aman dan efisien. Dibangun menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, aplikasi ini mendukung proses autentikasi pengguna, manajemen soal, dan penyimpanan hasil ujian.",
    image: "/projects/online-exam.png",
    tech: ["html", "css", "js", "php", "mysql", "infinity"],
    featured: true,
    link: "https://asadmahmud.42web.io/index.php",
  },
  {
    title: "Design UI/UX APP Store Shoes",
    description:
      "Desain antarmuka pengguna (UI/UX) aplikasi mobile Shoes Store ini dibuat menggunakan Figma dan menggambarkan alur e-commerce lengkap mulai dari pendaftaran akun, pencarian produk, detail produk, proses checkout, hingga komunikasi langsung dengan penjual.",
    image: "/projects/app-shoes.png",
    tech: ["figma"],
    featured: true,
    link: "",
  },

];

const techIcons = {
  html: "/icons/html.svg",
  css: "/icons/css.svg",
  php: "/icons/php.svg",
  ts: "/icons/ts.svg",
  mysql: "/icons/mysql.svg",
  js: "/icons/js.svg",
  react: "/icons/react.svg",
  vue: "/icons/vue.svg",
  next: "/icons/nextjs.svg",
  tailwind: "/icons/tailwind.svg",
  vercel: "/icons/vercel.svg",
  infinity: "/icons/infinity.svg",
  eslint: "/icons/eslint.svg",
  vite: "/icons/vite.svg",
  kotlin: "/icons/kotlin.svg",
  figma: "/icons/figma.svg",
};

const Projects = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <p className="text-gray-400 mb-6">
        Several projects that I have worked on, both private and open source.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-md hover:scale-[1.02] transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            {project.featured && (
              <div className="absolute top-2 right-2 bg-blue-600 text-xs px-2 py-1 rounded-full">
                <BadgeCheck size={12} className="inline-block mr-1" />
                Featured
              </div>
            )}

            <h3 className="text-base font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <img
                  key={index}
                  src={techIcons[tech]}
                  alt={tech}
                  title={tech}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
