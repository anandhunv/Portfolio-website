import React from "react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss, SiSocketdotio, SiTypescript, SiMongodb, SiJquery, SiFigma } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { CgCPlusPlus } from "react-icons/cg";

const skills = [
  { name: "React.js", icon: <FaReact className="-blue-400" size={40} /> },
  { name: "JavaScript", icon: <FaReact className="-yellow-400" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs className="-green-500" size={40} /> },
  { name: "MongoDB", icon: <SiMongodb className="-green-400" size={40} /> },
  { name: "Express.js", icon: <SiExpress className="-gray-400" size={40} /> },
  { name: "HTML5", icon: <FaHtml5 className="-orange-500" size={40} /> },
  { name: "CSS3", icon: <FaCss3 className="-blue-400" size={40} /> },
  { name: "Redux", icon: <SiRedux className="-purple-500" size={40} /> },
  { name: "WebSockets", icon: <SiSocketdotio className="-white" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript className="-blue-500" size={40} /> },
  { name: "C Programming", icon: <CgCPlusPlus className="-blue-500" size={40} /> },
  { name: "Python", icon: <FaPython className="-yellow-400" size={40} /> },
  { name: "Java", icon: <FaJava className="-red-500" size={40} /> },
  { name: "REST API", icon: <MdApi className="-yellow-400" size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="-blue-500" size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap className="-purple-500" size={40} /> },
  { name: "jQuery", icon: <SiJquery className="-blue-500" size={40} /> },
  { name: "Figma", icon: <SiFigma className="-pink-500" size={40} /> },
];

const SkillsLogo = () => {
  return (
    <div className="bg-black overflow-hidden md:py-16 py-8 text-white relative">
      {/* Logo animation */}
      <div className="flex animate-marquee">
        {[skills, skills].map((skillSet, setIndex) => (
          <div key={setIndex} className="flex shrink-0 min-w-full items-center justify-around px-4">
            {skillSet.map((skill, index) => (
              <div key={index} className="mx-8 flex gap-2 items-center">
                {skill.icon}
                <p className="text-2xl mt-2 font-bold">{skill.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};

export default SkillsLogo;
