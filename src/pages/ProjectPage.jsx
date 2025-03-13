import React, { useState } from "react";
import { useNavigate } from "react-router";

const projects = [
  { id: 1, title: "React E-Commerce", category: "React", image: "react-ecom.jpg" },
  { id: 2, title: "Portfolio Website", category: "HTML", image: "portfolio.jpg" },
  { id: 3, title: "MERN Chat App", category: "MERN", image: "mern-chat.jpg" },
  { id: 4, title: "Tailwind Dashboard", category: "Tailwind", image: "dashboard.jpg" },
];

const categories = ["All", "React", "MERN", "HTML", "Tailwind"];

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md transition ${
              selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
