import { useState } from "react";
import Swal from 'sweetalert2';
import {
  Send,
  Instagram,
  Linkedin,
  Mail,
  Github,
  ArrowUpRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom"; // Uncomment if used

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "portofolio_asad22", // Service ID
        "portofolio_asad22", // Template ID
        {
          name: formData.name,
          email: formData.email, // ⬅️ ini penting agar {{email}} terisi
          message: formData.message,
          time: new Date().toLocaleString(), // jika kamu juga pakai {{time}}
        },
        "MMbCVpYodQFmKujx0" // Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Pesan kamu berhasil dikirim.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
            background: "#1f1f1f",
            color: "#fff",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Gagal mengirim email", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Terjadi kesalahan. Coba lagi nanti.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Tutup",
            background: "#1f1f1f",
            color: "#fff",
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white ">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-gray-400 mb-6">Let's get in touch</p>
        <hr className="border-gray-800 my-6" />

        {/* Social Media Section */}
        <h2 className="text-xl mb-4">Find me on social media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gmail Card */}
          <ContactCard
            title="Stay in Touch"
            description="Reach out via email for any inquiries or collaborations."
            link="mailto:asadmahmudakram@gmail.com"
            buttonText="Go to Gmail"
            bg="bg-red-900/70"
            icon={<Mail size={32} />}
            buttonBg="bg-red-800/70 hover:bg-red-700/70"
          />

          {/* Instagram Card */}
          <ContactCard
            title="Follow My Journey"
            description="Stay updated with my latest posts and stories on Instagram."
            link="https://instagram.com/asaddakram"
            buttonText="Go to Instagram"
            bg="bg-gradient-to-br from-purple-600 to-pink-500"
            icon={<Instagram size={32} />}
            buttonBg="bg-purple-500/70 hover:bg-purple-400/70"
          />

          {/* LinkedIn Card */}
          <ContactCard
            title="Let's Connect"
            description="Connect for collaboration or explore my professional experience."
            link="https://linkedin.com/in/asad-mahmud-akram"
            buttonText="Go to LinkedIn"
            bg="bg-blue-900/70"
            icon={<Linkedin size={32} />}
            buttonBg="bg-blue-700/70 hover:bg-blue-600/70"
          />

          {/* TikTok Card (SVG Custom Icon) */}
          <ContactCard
            title="Join the Fun"
            description="Follow me on TikTok for entertaining and engaging content."
            link="https://www.tiktok.com/@asad-akram"
            buttonText="Go to TikTok"
            bg="bg-gray-800/70"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            }
            buttonBg="bg-gray-700/70 hover:bg-gray-600/70"
          />

          {/* GitHub Card */}
          <ContactCard
            title="Explore the Code"
            description="Explore the source code for all my projects on GitHub."
            link="https://github.com/asadmahmud22"
            buttonText="Go to GitHub"
            bg="bg-gray-900/70 col-span-1 md:col-span-2 lg:col-span-1"
            icon={<Github size={32} />}
            buttonBg="bg-gray-800/70 hover:bg-gray-700/70"
          />
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-xl mb-6">Or send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <InputField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="bg-gray-900 border border-gray-800 rounded p-3 text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-gray-800 w-full text-white py-3 px-6 rounded flex items-center justify-center gap-2 hover:bg-gray-700 transition"
            >
              Send Email <Send size={16} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>COPYRIGHT © 2025</p>
          <p>As'ad Mahmud Akram. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

// Reusable Card Component
const ContactCard = ({
  title,
  description,
  link,
  buttonText,
  bg,
  icon,
  buttonBg,
}) => (
  <div className={`${bg} rounded-lg p-6 relative overflow-hidden`}>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button
            className={`${buttonBg} text-white px-4 py-2 rounded flex items-center gap-2 transition`}
          >
            {buttonText} <ArrowUpRight size={16} />
          </button>
        </a>
      </div>
      <div className="p-2 bg-white/20 rounded-lg">{icon}</div>
    </div>
  </div>
);

// Reusable Input Component
const InputField = ({ name, value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="bg-gray-900 border border-gray-800 rounded p-3 text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
    required
  />
);

export default Contact;
