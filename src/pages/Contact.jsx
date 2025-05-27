import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import { useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Github,
  Send,
  ArrowUpRight,
} from "lucide-react";

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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp(),
    });

    console.log("Message saved!");
    alert("Thanks! Your message has been sent.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Error saving message:", error);
    alert("Failed to send message. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-gray-400 mb-6">Lets get in touch</p>

        <hr className="border-gray-800 my-6" />

        <h2 className="text-xl mb-4">Find me on social media</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email Contact Card */}
          <div className="bg-red-900/70 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay in Touch</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Reach out via email for any inquiries or collaborations.
                </p>
                <a
                  href="mailto:asadmahmudakram@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-red-800/70 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-700/70 transition">
                    Go to Gmail <ArrowUpRight size={16} />
                  </button>
                </a>
              </div>
              <div className="p-2 bg-red-800/50 rounded-lg">
                <Mail size={32} />
              </div>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Follow My Journey
                </h3>
                <p className="text-sm text-gray-100 mb-4">
                  Stay updated with my latest posts and stories on Instagram.
                </p>
                <a
                  href="https://instagram.com/asaddakram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-purple-500/70 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-400/70 transition">
                    Go to Instagram <ArrowUpRight size={16} />
                  </button>
                </a>
              </div>
              <div className="p-2 bg-white/20 rounded-lg">
                <Instagram size={32} />
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-blue-900/70 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Connect for collaboration or explore my professional
                  experience.
                </p>
                <a
                  href="https://linkedin.com/in/asad-mahmud-akram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-700/70 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600/70 transition">
                    Go to LinkedIn <ArrowUpRight size={16} />
                  </button>
                </a>
              </div>
              <div className="p-2 bg-blue-800/50 rounded-lg">
                <Linkedin size={32} />
              </div>
            </div>
          </div>

          {/* TikTok Card */}
          <div className="bg-gray-800/70 rounded-lg p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Join the Fun</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Follow me on TikTok for entertaining and engaging content.
                </p>
                <a
                  href="https://www.tiktok.com/@asad-akram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-700/70 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-600/70 transition">
                    Go to TikTok <ArrowUpRight size={16} />
                  </button>
                </a>
              </div>
              <div className="p-2 bg-gray-700/50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">Explore the Code</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Explore the source code for all my projects on GitHub.
                </p>
                <a
                  href="https://github.com/asadmahmud22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gray-800/70 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-700/70 transition">
                    Go to Github <ArrowUpRight size={16} />
                  </button>
                </a>
              </div>
              <div className="p-2 bg-gray-800/50 rounded-lg">
                <Github size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl mb-6">Or send me a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-800 rounded p-3 text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-800 rounded p-3 text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
                required
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

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>COPYRIGHT © 2025</p>
          <p>As'ad Mahmud Akram. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
