import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu after  clicking  
    }
  };

  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Timeline", path: "#timeline" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to={"/"} className="text-xl font-bold">
              <span className="text-blue-500">Anandhu</span> NV
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleScroll(item.path.substring(1))}
                className="hover:text-gray-300 cursor-pointer px-3 py-2 text-sm font-medium transition"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700 transition"
            >
              {!isMenuOpen ? <MdMenu className="w-7 h-7" /> : <MdClose className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white px-4 pt-3 pb-5 space-y-2">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.path.substring(1))}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
