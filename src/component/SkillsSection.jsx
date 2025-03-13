import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

const skillsData = {
  professional: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 96 },
    { name: "Redux", level: 70 },
    { name: "WebSockets", level: 65 },
    { name: "TypeScript", level: 85 },
    { name: "C Programming", level: 75 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "REST API", level: 88 },
  ],
  tools: [
    { name: "Tailwind CSS", level: 95 },
    { name: "Bootstrap", level: 90 },
    { name: "jQuery", level: 75 },
    { name: "Figma", level: 80 },
  ],
  soft: [
    { name: "Communication", level: 85 },
    { name: "Problem-Solving", level: 90 },
    { name: "Teamwork", level: 80 },
    { name: "Adaptability", level: 75 },
    { name: "Creativity", level: 85 },
  ],
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const skills = skillsData[activeTab];

  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full mx-auto bg-gradient-to-b from-[#080806] to-black text-white p-10 shadow-lg "
    >
      <h2 className="text-4xl font-extrabold text-start mb-8">Skills</h2>

      <div className="flex  md:justify-center overflow-x-scroll text-nowrap gap-4 px-9 mb-8 scrollbar-hide w-full">
        {["professional", "tools", "soft"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-md md:text-lg text-base font-semibold transition-all duration-300 ${
              activeTab === tab ? "bg-blue-500 text-black shadow-lg scale-105" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {tab === "professional"
              ? "Professional Skills"
              : tab === "tools"
              ? "Tools & Technologies"
              : "Soft Skills"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="w-full" whileHover={{ scale: 1.05 }}>
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-medium">{skill.name}</p>
                <p className="text-lg font-semibold text-blue-400">{skill.level}%</p>
              </div>
              <div className="w-full bg-gray-800 h-3 rounded-full relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className={`h-3 ${
                    activeTab === "soft"
                      ? "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
                      : "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300"
                  } rounded-full shadow-lg`}
                  data-tooltip-id={`skill-${index}`}
                ></motion.div>
              </div>
              <Tooltip
                id={`skill-${index}`}
                place="top"
                content={`Expertise: ${skill.level}%`}
                className="text-xs bg-black text-white p-1 rounded"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsSection;
