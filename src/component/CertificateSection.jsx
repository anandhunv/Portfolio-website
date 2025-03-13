import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight, HiX } from "react-icons/hi";
import namste_react from "../assets/certificates/react.png";
import js from "../assets/certificates/js.png";
import java from "../assets/certificates/java.jpg";
import pythonds from "../assets/certificates/pythondatastructure.png";
import html from "../assets/certificates/html.png";
import google from "../assets/certificates/google.png";
import python from "../assets/certificates/python.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";





const certificateData = [
  {
    id: "cert1",
    image: namste_react,
    title: "Namaste React",
    description: "Learned React.js through projects like Netflix GPT (movie browsing/recommendation app), a YouTube-like video streaming app, and a food ordering app. Gained skills in React, state management, APIs, and responsive UI.",
  },
  {
    id: "cert2",
    image: js,
    title: "Namaste JavaScript",
    description: "Mastered JavaScript basics to advanced topics. Developed dynamic web applications, focused on ES6+ features, asynchronous programming, DOM manipulation, and best coding practices for scalable, maintainable code.",
  },
  {
    id: "cert3",
    image: java,
    title: "MSME TDC PPDC - JAVA PROGRAMMING TRAINING PROGRAM",
    description: "The `Java Programming Training Program` is a comprehensive and immersive course designed to equip participants with essential Java programming skills. This program caters to both beginners and individuals with prior coding experience, aiming to cultivate a strong foundation in Java development.",
  },
  {
    id: "cert4",
    image:html,
    title: "Introduction To HTML",
    description: "This course is an ideal starting point for individuals aspiring to enter the web development realm and create captivating web pages with HTML."  },
  {
    id: "cert5",
    image: python,
    title: "Advanced Python Programming",
    description: "Advanced Python programming involves mastering complex concepts, data structures, and algorithms. It includes decorators, asynchronous programming, and functional programming"  },
  {
    id: "cert6",
    image: pythonds,
    title: "Python Data Structures",
    description: "Completed an intensive Python Data Structures course, gaining comprehensive knowledge in implementing and optimizing fundamental data structures. Mastered the use of sets, dictionaries, stacks, queues, heaps, and graphs to efficiently manage and manipulate data. Developed expertise in algorithmic problem-solving and analysis. Acquired skills to leverage Python's standard library effectively for data handling and processing. Demonstrated proficiency in writing clean, maintainable code with a focus on performance and scalability.",
  },
  {
    id: "cert6",
    image: google,
    title: "  Introduction To Google Workspace Administration",
    description: "This course provides a comprehensive introduction to Google Workspace Administration, equipping learners with the essential skills to manage and optimize various Google Workspace tools and services. Participants will gain proficiency in user and group management, security settings, and collaboration features. Through hands-on exercises, they will learn how to configure and customize Google Workspace applications to meet organizational needs. By the end of the course, attendees will be well-prepared to effectively administer Google Workspace and enhance productivity within their teams or organizations.",
  }, {
    id: "cert6",
    image: python,
    title: "  Programming For Everybody (Getting Started With Python)",
    description: "An introductory course providing a solid foundation in Python programming. Covers Python fundamentals, data structures, functions, and debugging techniques. Ideal for beginners with no prior coding experience.",
  },
];


const CertificateSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullImage, setFullImage] = useState(null);


  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? certificateData.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === certificateData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-black to-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold tracking-wide text-gray-100 mb-10">
          My Certifications
        </h2>

        {/* Certificate Layout (With Hover Effect) */}
        <div className="relative group w-full bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
        {/* /* Left Arrow - Always Visible on Mobile  */}
<button
  onClick={handlePrevSlide}
  className="absolute md:right-1/12 md:block hidden  top-1/12 transform -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
>
  <MdKeyboardArrowLeft size={28} className="text-white" />
</button>
<button
  onClick={handlePrevSlide}
  className="absolute left-3 md:hidden block  top-1/12 transform -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
>
  <MdKeyboardArrowLeft size={28} className="text-white" />
</button>
          {/* Left Side - Certificate Image */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center bg-[#0d0d0d] p-6"
            onClick={() => setFullImage(certificateData[currentSlide].image)}
          >
            <img
              src={certificateData[currentSlide].image}
              alt={certificateData[currentSlide].title}
              className="w-auto h-[380px] object-cover cursor-pointer rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right Side - Certificate Details */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-100">
              {certificateData[currentSlide].title}
            </h3>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              {certificateData[currentSlide].description}
            </p>
          </div>

          {/* Right Arrow - Appears on Hover */}
          <button
  onClick={handleNextSlide}
  className="absolute right-3 top-1/12 transform -translate-y-1/2 p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
>
  <MdKeyboardArrowRight size={28} className="text-white" />
</button>
        </div>
      </div>

      {/* Full Image Modal */}
      {fullImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full flex justify-center">
            <button
              className="absolute top-3 right-3 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              onClick={() => setFullImage(null)}
            >
              <HiX className="w-6 h-6" />
            </button>
            <img
              src={fullImage}
              alt="Certificate"
              className="w-auto max-w-full h-[85vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default CertificateSection;
