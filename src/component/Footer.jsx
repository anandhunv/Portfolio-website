import React from "react";
import { Link } from "react-router"; // Fix incorrect import
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import myImage from "../assets/my-photo.jpg"; // Import your image

const Footer = () => {
  const footerLinks = {

  };

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
    { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/nv_anandhu" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "www.linkedin.com/in/anandhu-nv" },
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/anandhunv" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side */}
          <div className="md:w-2/4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={myImage} alt="My Profile" className="h-44  rounded-md object-cover border-2 border-gray-300" />
              <div>
              <h2 className="text-2xl font-bold text-white">Anandhu NV</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
              Passionate MERN stack developer crafting scalable digital solutions. <br />
              Specializing in React, Node.js, and MongoDB to build high-performance web applications.
            </p>
              </div>
       
            </div>
           
          </div>

          {/* Right Side */}
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        id={link.id}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-lg">{social.icon}</span> {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Anandhu NV. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
