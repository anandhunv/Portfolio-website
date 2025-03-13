import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import { incomingProjects, projects } from "./projectList";

const techOptions = [
  "All", "React", "HTML", "JavaScript", "Node.js", "MongoDB",
  "Express.js", "Tailwind CSS", "TypeScript", "WebSocket","Socket-io", "Figma", "Redux", "Axios"
];

;

const ProjectFilter = () => {
  const [selectedTech, setSelectedTech] = useState("All");
  const [showIncoming, setShowIncoming] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = selectedTech === "All"
    ? projects
    : projects.filter((project) => project.techStack.includes(selectedTech));

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 py-4 shadow-md z-10 flex justify-between items-center px-6">
        <div>
          <Link to="/" className="text-xl font-bold">
            <span className="text-blue-500">Anandhu</span> NV
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-400 transition-all"
            onClick={() => setShowIncoming(!showIncoming)}
          >
            {showIncoming ? "Show Projects" : "Incoming Projects"}
          </button>
         
        </div>
      </nav>
      
      <div className="mt-20 flex-grow px-4 py-12">
        {!showIncoming ? (
          <>
            {/* Filter Section */}
            <div className="flex justify-start flex-nowrap overflow-x-auto w-full gap-4 mb-6 text-nowrap scrollbar-hide">
              {techOptions.map((tech) => (
                <button
                  key={tech}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTech === tech ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice().reverse().map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        ) : (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Incoming Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {incomingProjects.map((project) => (
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  <span className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black text-sm font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
