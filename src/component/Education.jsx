import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const EducationExperience = () => {
  return (
    <motion.div
    id="timeline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20  bg-gradient-to-b from-[#080806] to-black text-white p-10"
    >
      {/* Education Section */}
      <div className="w-full lg:w-1/2 mb-16">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-400 tracking-[4px]">2016 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-zinc-900 flex flex-col gap-10">
        <ResumeCard
  title="B.Tech in Information Technology"
  subTitle="Government Engineering College, Idukki (2019 - 2023)"
  result="3.8/4"
  des="Focused on software development, data structures, algorithms, cloud computing, and MERN stack technologies."
  darkMode={true}
/>
<ResumeCard
  title="Higher Secondary Education"
  subTitle="Vivekodayam Boys Higher Secondary School, Thrissur (2017 - 2019)"
  result="4.0/4"
  des="Specialized in Bio Science, Mathematics, and foundational scientific concepts."
  darkMode={true}
/>


<ResumeCard
  title="SSLC (Secondary School Leaving Certificate)"
  subTitle="CMS High School Thrissur (2016 - 2017)"
  result="4.0/4"
  des="Completed secondary education with a strong foundation in Science, Mathematics, and Language studies."
  darkMode={true}
/>

        </div>
      </div>

      {/* Job Experience Section */}
      <div className="w-full lg:w-1/2">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-blue-400 tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Job Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full border-l-[6px] border-l-zinc-900  flex flex-col gap-10">
       
        <ResumeCard
  title="MERN Stack Developer"
  subTitle="ZedzoftTech Solution (2024 - Present)"
  result="Remote"
  des="Developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. Worked on API integrations, authentication, and optimized UI/UX for better accessibility."
  darkMode={true}
/>

        </div>
      </div>
    </motion.div>
  );
};

export default EducationExperience;
