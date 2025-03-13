import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg flex flex-col bg-gray-800">
      {/* Project Image */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        />
      </div>

      {/* Project Content */}
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          {/* Title & Icons */}
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-amber-400 font-normal">
              {project.title}
            </h3>
            <div className="flex gap-2">
      <a
        href={project?.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-400 duration-300 cursor-pointer"
      >
        <BsGithub />
      </a>
      <a
        href={project?.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-amber-400 duration-300 cursor-pointer"
      >
        <FaGlobe />
      </a>
    </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-semibold bg-gray-700 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
