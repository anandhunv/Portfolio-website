import React, { useEffect, useRef, useState } from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'
import mern from "../assets/about/mern.mp4";
import edit from "../assets/about/editing.mp4";
import poster from "../assets/about/poster.mp4";
import posterposter from "../assets/about/posterposter.png";
import editposter from "../assets/about/editposter.png";
import mernposter from "../assets/about/mernposter.png";






const features = [
    {
      id: "ai-1",
      title: "Build Stunning Web Applications",
      description:
        "Create modern, responsive, and feature-rich web applications with ease. Leverage powerful tools and frameworks to bring your ideas to life efficiently.",
      link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
      linkText: "Explore documentation",
      video:mern,
      poster:mernposter,
    },
    {
      id: "ai-2",
      title: "Edit and Enhance Videos Like a Pro",
      description:
        "Transform raw footage into cinematic masterpieces. Utilize cutting-edge tools to edit, enhance, and produce high-quality videos effortlessly.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:edit,
      poster:editposter,
    },
    {
      id: "ai-3",
      title: "Create Eye-Catching Posters and Designs",
      description:
        "Design visually stunning posters, banners, and marketing materials with ease. Use professional-grade tools to craft compelling visuals for any purpose.",
      link: "https://help.webflow.com/hc/articles/34295931022099",
      linkText: "Explore documentation",
      video:poster,
      poster:posterposter,
    },
  ];


const About = () => {

    const [activeFeature,setActiveFeature]=useState(0)
    const featuresRef=useRef(null)
    const observerRef=useRef(null)

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        };
    
        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              const index = features.findIndex((feature) => feature.id === id);
              if (index !== -1) {
                setActiveFeature(index);
                const video = document.querySelector(`video[data-feature="${id}"]`);
                if (video) video.play();
              }
            }
          });
        }, options);
    
        const featureElements = document.querySelectorAll(".feature-item");
        featureElements.forEach((element) => {
          observerRef.current.observe(element);
        });
    
        return () => {
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        };
      }, []);


  return (
    <div className='bg-black text-white py-24' id="about">
        <div className="primary-container ">

            {/* header  */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
                <div className="">
                    <h2 className=' text-5xl md:text-7xl font-bold mb-8 max-w-[50rem]'>About Me</h2>
                </div>
                <div className='mb-24'>
                    <p className='text-xl text-gray-300 mb-8 max-w-[35rem]'>From web applications to video editing and poster designs, I bring ideas to life with a touch of creativity and technical expertise. Let's build something amazing together.</p>
                    <Link className='inline-flex  items-center text-white hover:text-gray-300 text-lg font-medium transition-colors
                    '> Discover My Work <HiArrowRight className='ml-2 w-5 h-5'/></Link>
                </div>
            </div>

            {/* image and content  */}

            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8'> 
                {/* image */}
                <div className="">
                    <div className="sticky top-24">
                        <div className="aspect-square rounded-lg overflow-hidden border border-white/20">
                            
                            <video
                             src={features[activeFeature].video}
                             poster={features[activeFeature].poster}
                             className='w-full h-full object-cover'
                             muted 
                             playsInline
                             loop
                             autoPlay
                             ></video>
                        </div>
                    </div>
                </div>

                {/* content   */}

                <div>
                  

                 {/* Features List */}
            <div ref={featuresRef} className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className="feature-item scroll-mt-24 md:h-72 border-b border-white/10 pb-16"
                >
                  <div className="max-w-[35ch] mb-4">
                    <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 max-w-[35rem]">
                    {feature.description}
                  </p>
                  <a
                    href="/projects"
                    className="inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors"
                  >
                    Discover My Work
                    <HiArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default About