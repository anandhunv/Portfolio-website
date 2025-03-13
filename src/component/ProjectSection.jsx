import React, { useRef, useState } from 'react'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router';
import netflixlogo from "../assets/projects/netflixHome.png"
import foodcartlogo from "../assets/projects/foodcarthome.png"
import videologo from "../assets/projects/videologo.png"
import foodcart from "../assets/projects/foodcart.jpg"
import netflixposter from "../assets/projects/netflix.jpg"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';






const projectData = [
    {
      id: 'foodcart',
      logo: foodcartlogo,
      video: 'https://videos.pexels.com/video-files/4828605/4828605-uhd_2732_1440_25fps.mp4',
      poster: foodcart,
      stat: '94%',
      statDesc: 'job placement rate',
      desc: "A full-stack food ordering platform that simplifies online ordering. Users can browse menus, add items to their cart, and pay seamlessly, while admins manage orders and menus effortlessly.",
      type: 'Mern Stack Project',
      link: 'https://food-cartss.web.app/'
    },
    {
      id: 'edutech',
      logo: netflixlogo,
      video: 'https://videos.pexels.com/video-files/5082592/5082592-uhd_2732_1440_25fps.mp4',
      poster: netflixposter,
      stat: '85%',
      statDesc: 'completion rate',
      desc:       "A React application that leverages OpenAI's GPT to provide personalized movie recommendations. It includes AI-powered search, traditional movie search, and Firebase authentication.",
      type: 'React Project',
      link: 'https://github.com/anandhunv/netflix_gpt'
    },
    {
      id: 'youtube',
      logo: videologo,
      video: 'https://videos.pexels.com/video-files/4988817/4988817-hd_1920_1080_30fps.mp4',
      poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/66ec7faad1ba5dcf377b861c_outliant-bg.webp',
      stat: '3x',
      statDesc: 'faster learning',
      desc: "A YouTube-like video streaming app with features like video playback, live chat, comments, and search. Built using React.js, Redux, and the YouTube Data API.",
      type: 'React Project',
      link: 'https://utobrutus.netlify.app/'
    }
  ];
  const ProjectSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const sliderRef = useRef(null);
  

    // Previous slide
    const handlePrevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
    };
  
    // Next slide
    const handleNextSlide = () => {
      setCurrentSlide((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
    };
  
    // Toggle video play and pause
    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
      const video = document.querySelector(
        `video[data-customer="${projectData[currentSlide].id}"]`
      );
      if (video) {
        isPlaying ? video.pause() : video.play();
      }
    };
  
    return (
      <div className="py-24 bg-primary text-white overflow-hidden" id="projects">
        <div className="primary-container">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="max-w-[45rem]">
              <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
              </h2>
            </div>
  
            {/* Navigation Buttons (Show on Hover) */}
            <div className="group flex flex-col gap-2">
            
              <div>
                <a href={"/projects"}>
                  <h1 className='text-nowrap'>View All Projects</h1>
                </a>
              </div>
            </div>
          </div>
  
          {/* Video slider */}
          <div className="relative overflow-hidden group">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projectData.map((project) => (
                <div key={project.id} className="w-full shrink-0 relative">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    
                    <video
                      data-customer={project.id}
                      src={project.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      loop
                      poster={project.poster}
                    ></video>
  
                    <div className="absolute inset-0 bg-black/40"></div>
  
                    {/* Content */}
                    <div className="absolute justify-center items-center inset-0 p-8 flex flex-col">
                      <img
                        src={project.logo}
                        alt=""
                        className="h-18 w-64 mb-auto"
                      />
  
                      <div className="sm:grid grid-cols-2  items-end gap-8 text-white">
                        <div>
                          <p className="text-6xl sm:block hidden font-bold mb-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live
                            </a>
                          </p>
                          <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                          <p className="text-lg ">Watch the live session.</p>
                          </a>

                        </div>
  
                        <div>
                          <p className="text-xl mb-4 sm:block hidden">{project.desc}</p>
                          <div className=" items-center justify-between sm:flex hidden">
                            <div className="text-lg">{project.type}</div>
                            <button
                              onClick={togglePlayPause}
                              className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                              {isPlaying ? (
                                <BsPauseFill size={24} />
                              ) : (
                                <BsPlayFill size={24} />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Arrows (Show on Hover) */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 md:p-3 p-2 bg-gray-50/30 hover:bg-gray-600 rounded-full transition shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
            >
            <MdKeyboardArrowLeft size={28} className=" text-white" />
            </button>
  
            <button
              onClick={handleNextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 md:p-3 p-2 bg-gray-50/30 hover:bg-gray-600 rounded-full transition shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-300"
              >
            <MdKeyboardArrowRight size={28} className=" text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default ProjectSection