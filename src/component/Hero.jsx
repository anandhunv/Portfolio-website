import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";
import video from "../assets/banner-video.mp4";
import bannerleft from "../assets/banner-left.jpg";
import bannerright from "../assets/banner-right.jpg";
import cv from "../assets/Anandhunv_cv.pdf";


// Extract the Hero component code as a string
const heroCode = `
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";
import video from "../assets/banner-video.mp4";
import bannerleft from "../assets/banner-left.avif";
import bannerright from "../assets/banner-right.png";

const Hero = () => {
  const [currentLines, setCurrentLines] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (lineIndex < codeSnippets.length) {
      if (charIndex < codeSnippets[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLines((prev) => {
            const newLines = [...prev];
            newLines[newLines.length - 1] += codeSnippets[lineIndex][charIndex];
            return newLines.length > 10 ? newLines.slice(-10) : newLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLines((prev) => [...prev, ""]);
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
      }
    } else {
      setTimeout(() => {
        setCurrentLines([""]);
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
    }
  }, [charIndex, lineIndex]);

  const handleCopy = () => {
    const codeToCopy = codeSnippets.join("\\n");

    const fallbackCopyText = (text) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          console.error("Fallback copy failed");
        }
      } catch (err) {
        console.error("Fallback copy failed: ", err);
      }

      document.body.removeChild(textArea);
    };

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codeToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Clipboard write failed, using fallback: ", err);
          fallbackCopyText(codeToCopy);
        });
    } else {
      fallbackCopyText(codeToCopy);
    }
  };

  return (
    <div className="text-white pt-24 bg-gradient-to-b from-gray-900 to-black md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2 text-left">
            <div className="mb-6">
              <span className="text-[#999999] uppercase tracking-[0.1em] text-base font-bold">
                I'm Anandhu N V
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-12">
              A MERN Stack <br className="md:block hidden" /> Developer
            </h1>
            <p className="text-[#999999] md:w-4/5 md:text-xl leading-relaxed">
              Building full-stack applications with React, Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-black p-6 rounded-lg border border-gray-700 text-green-400 font-mono text-sm leading-6">
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-gray-400 hover:text-white p-2"
              >
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
              {currentLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-pre-wrap"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-16 bg-black relative">
          <video src={video} autoPlay muted loop className="w-full h-full object-cover" />
          <div className="absolute top-1/2 xl:-left-10 md:-left-0 z-20 xl:block hidden">
            <img src={bannerleft} alt="" className="lg:h-32 md:h-24 h-20 w-full object-cover" />
          </div>
          <div className="absolute bottom-1/5 xl:-right-10 md:-right-0 z-20 xl:block hidden">
            <img src={bannerright} alt="" className="lg:h-44 md:h-32 h-28 w-full object-cover" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;
`.split("\n"); // Split the code into lines for the animation

const Hero = () => {
  const [currentLines, setCurrentLines] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (lineIndex < heroCode.length) {
      if (charIndex < heroCode[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLines((prev) => {
            const newLines = [...prev];
            newLines[newLines.length - 1] += heroCode[lineIndex][charIndex];
            return newLines.length > 10 ? newLines.slice(-10) : newLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLines((prev) => [...prev, ""]);
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
      }
    } else {
      setTimeout(() => {
        setCurrentLines([""]);
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
    }
  }, [charIndex, lineIndex]);

  const handleCopy = () => {
    const codeToCopy = heroCode.join("\n");

    const fallbackCopyText = (text) => {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else {
          console.error("Fallback copy failed");
        }
      } catch (err) {
        console.error("Fallback copy failed: ", err);
      }

      document.body.removeChild(textArea);
    };

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(codeToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Clipboard write failed, using fallback: ", err);
          fallbackCopyText(codeToCopy);
        });
    } else {
      fallbackCopyText(codeToCopy);
    }
  };

  return (
    <div className="text-white pt-24 bg-gradient-to-b from-gray-900 to-black md:pt-32" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2 text-left">
        <div className="mb-6">
  <span className="text-[#999999] uppercase tracking-[0.1em] text-base font-bold">
  Hello, I'm Anandhu N V
  </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-12">
Crafting Scalable MERN Stack Solutions
</h1>
<p className="text-[#999999] md:w-4/5 md:text-xl leading-relaxed">
Where Code Meets Creativity, & Bugs Fear to Exist
</p>

  {/* Buttons Section */}
  <div className="flex flex-wrap gap-4 mt-8">
    <button id="contact" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition">
      Hire Me
    </button>
   
    <a
      href={cv}
      download
      className="px-6 py-3 bg-transparent border border-gray-600 text-white hover:bg-gray-800 rounded-lg transition"
    >
      Download CV
    </a>
  </div>
</div>

          <div className="md:w-1/2 relative">
            <div className="bg-black p-6 rounded-lg border border-gray-700 text-green-400 font-mono text-sm leading-6">
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 text-gray-400 hover:text-white p-2"
              >
                {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
              </button>
              {currentLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-pre-wrap text-nowrap"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-16 bg-black relative">
          <video src={video} autoPlay muted loop className="w-full h-full object-cover" />
          <div className="absolute top-1/2 xl:-left-10 md:-left-0 z-20 xl:block hidden">
            <img src={bannerleft} alt="" className="lg:h-32 md:h-24 h-20 w-full object-cover rounded-md" />
          </div>
          <div className="absolute bottom-1/5 xl:-right-10 md:-right-0 z-20 xl:block hidden">
            <img src={bannerright} alt="" className="lg:h-44 md:h-32 h-28 w-full object-cover rounded-lg" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block"></div>
      </div>
    </div>
  );
};

export default Hero;