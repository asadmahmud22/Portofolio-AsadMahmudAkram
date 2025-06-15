import { Code, Coffee, Award } from "lucide-react";
import { useEffect } from "react";

const skills = [
  { name: "Html", color: "border-orange-500", logo: "/logos/html.svg" },
  { name: "JavaScript", color: "border-yellow-500", logo: "/logos/js.svg" },
  { name: "PHP", color: "border-blue-600", logo: "/logos/php.svg" },
  { name: "Laravel", color: "border-red-600", logo: "/logos/laravel.svg" },
  { name: "Next.js", color: "border-green-500", logo: "/logos/nextjs.svg" },
  { name: "Vite", color: "border-purple-900", logo: "/logos/vite.svg" },
  { name: "GitHub", color: "border-gray-800", logo: "/logos/github.svg" },
  { name: "Kotlin", color: "border-purple-700", logo: "/logos/kotlin.svg" },
  {
    name: "TailwindCSS",
    color: "border-blue-500",
    logo: "/logos/tailwind.svg",
  },
  { name: "CSS", color: "border-blue-500", logo: "/logos/css.svg" },
  { name: "Invinity", color: "border-purple-500", logo: "/logos/infinity.svg" },
  { name: "Eslint", color: "border-blue-500", logo: "/logos/eslint.svg" },
  { name: "Vercel", color: "border-purple-700", logo: "/logos/vercel.svg" },
];

const Home = () => {
  useEffect(() => {
    // Inject CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @keyframes marquee-right {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0%);
        }
      }
      
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
      
      .animate-marquee-right {
        animation: marquee-right 35s linear infinite;
      }
      
      /* Mobile animations - faster */
      @media (max-width: 740px) {
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
      }
      
      .marquee-container:hover .animate-marquee,
      .marquee-container:hover .animate-marquee-right {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-w-lg max-w-6xl min-h-screen bg-black text-white">
      {/* Consistent max-width and responsive container */}
      <div className="max-w-6xl mx-auto px-1 py-1">
        {/* Header Section with consistent styling */}
        <div className="max-w-5xl mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-400">Status</div>
            <div className="text-right">
              <div className="text-green-400 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 my-4"></div>
        </div>

        {/* Section Intro with consistent font sizes */}
        <div className="max-w-5xl mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-left leading-tight">
            Hi, I'm As'ad Mahmud Akram
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-left leading-tight">
            Frontend Developer
          </h2>

          <div className="flex flex-col sm:flex-row sm:gap-6 text-gray-400 mb-4 text-left text-sm">
            <div className="flex items-center gap-2 justify-start mb-1 sm:mb-0">
              <span className="w-1 h-1 sm:w-auto sm:h-auto bg-gray-400 rounded-full sm:bg-transparent">
                <span className="hidden sm:inline">•</span>
              </span>
              Based in Klaten, Indonesia <span className="text-sm">🇮🇩</span>
            </div>
            <div className="flex items-center gap-2 justify-start">
              <span className="w-1 h-1 sm:w-auto sm:h-auto bg-gray-400 rounded-full sm:bg-transparent">
                <span className="hidden sm:inline">•</span>
              </span>
              Onsite
            </div>
          </div>

          <div className="max-w-6xl text-gray-300 space-y-4 text-left">
            <p>
              Saya adalah seorang pengembang perangkat lunak yang antusias dan
              berpengalaman, dengan fokus utama di pengembangan frontend.
              Terbiasa menggunakan React dan cukup paham berbagai teknologi web.
              Saya juga memiliki ketertarikan dan pengalaman dalam desain UI/UX,
              serta selalu berusaha menciptakan antarmuka yang fungsional dan
              menarik.
            </p>
          </div>
        </div>

        {/* Section Skills with consistent styling */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Code size={24} />
            <h2 className="text-xl  font-semibold">Skills</h2>
          </div>
          <p className="text-gray-400 mb-6">
            My professional skills and technologies
          </p>

          {/* Marquee kiri ke kanan */}
          <div className="max-w-4xl overflow-hidden relative marquee-container mb-4">
            <div className="flex w-max animate-marquee gap-2">
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={index}
                  className={`text-white px-3 py-1.5 flex items-center gap-2 border ${skill.color} bg-white bg-opacity-10 backdrop-blur-md border-white border-opacity-20 rounded-lg shadow-md whitespace-nowrap hover:bg-opacity-20 transition-all duration-300`}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee kanan ke kiri */}
          <div className="max-w-4xl overflow-hidden relative marquee-container">
            <div className="flex w-max animate-marquee-right gap-2">
              {skills.concat(skills).map((skill, index) => (
                <div
                  key={index}
                  className={`text-white px-3 py-1.5 flex items-center gap-2 border ${skill.color} bg-white bg-opacity-10 backdrop-blur-md border-white border-opacity-20 rounded-lg shadow-md whitespace-nowrap hover:bg-opacity-20 transition-all duration-300`}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <span className="text-xs sm:text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Service with consistent styling */}
        <div className="max-w-5xl mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Coffee size={20} />
            <h2 className="text-xl sm:text-2xl font-semibold">Service</h2>
          </div>
          <div className="text-gray-300 space-y-4 text-left">
            <p>
              Sebagai seorang pengembang frontend lepas, saya berdedikasi untuk
              menciptakan situs web yang luar biasa dan solusi web strategis
              untuk merek, perusahaan, institusi, dan startup. Dengan pengalaman
              yang mendalam dalam pengembangan web modern, saya siap membantu
              mewujudkan visi digital Anda.
            </p>
          </div>
        </div>

        {/* Call to Action with responsive design */}
        <div className="max-w-5xl space-y-4">
          {/* Mobile and Desktop unified CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main CTA */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-lg p-4 text-left border border-blue-500 border-opacity-20">
              <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <Award size={18} />
                Let's work together!
              </h3>
              <p className="text-blue-100 mb-4 text-xs sm:text-sm leading-relaxed">
                Ready to create something amazing together? Let's discuss your
                project and bring your vision to life.
              </p>
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Get In Touch
              </a>
            </div>

            {/* Social & Contact */}
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-200">
                Connect with me
              </h4>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm">
                Follow my work and connect on social media
              </p>

              <div className="flex gap-3">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
