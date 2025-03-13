import React from 'react';
import { FiCode, FiDatabase, FiMonitor, FiImage, FiVideo, FiPenTool } from 'react-icons/fi';
import { GiTargetPoster } from 'react-icons/gi';
import { MdOutlinePermMedia } from 'react-icons/md';

const WhatIDo = () => {
    const skills = [
        {
            icon: <FiCode className="w-8 h-8" />, 
            title: "MERN Stack Development",
            description: "Building full-stack applications using MongoDB, Express.js, React, and Node.js, ensuring seamless frontend-backend integration."
        },
        {
            icon: <FiMonitor className="w-8 h-8" />, 
            title: "Frontend Development",
            description: "Crafting responsive and interactive UIs using React, Tailwind CSS, and JavaScript frameworks to enhance user experiences."
        },
        {
            icon: <FiDatabase className="w-8 h-8" />, 
            title: "Backend Development",
            description: "Developing scalable server-side applications with Node.js, Express, and MongoDB, optimizing API performance and security."
        },
        {
            icon: <MdOutlinePermMedia className="w-8 h-8" />, 
            title: "Multimedia Editing",
            description: "Editing photos and videos using tools like Photoshop, Lightroom, Premiere Pro, and After Effects for high-quality visuals."
        },
        {
            icon: <GiTargetPoster className="w-8 h-8" />, 
            title: "Poster Design",
            description: "Creating eye-catching posters and graphics using Canva, Figma, and Adobe Illustrator for branding and promotions."
        }
        , {
          icon: <FiPenTool className="w-8 h-8" />, 
          title: "UI/UX Design",
          description: "Designing intuitive and visually appealing user interfaces with a focus on usability and accessibility."
      }
    ];

    return (
        <div className='bg-primary text-white'>
            <div className='primary-container py-32'>
                <h2 className='text-4xl font-bold text-center mb-12'>What I Do</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {skills.map((skill, index) => (
                        <div key={index} className='flex flex-col text-white border-t border-white/20 pt-8'>
                            <div className='mb-4'>{skill.icon}</div>
                            <h3 className='text-lg font-medium mb-2'>{skill.title}</h3>
                            <p className='text-gray-500 flex-1'>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;
