import React, { useEffect, useRef, useState } from "react";
import { BsPauseBtnFill, BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router";
// design section data
const tabsData = [
  {
    id: 'tab1',
    title: 'Design without limits',
    subtitle: 'CodeTutor puts the power of code into a visual canvas so every team can create stunning websites quickly — and extend the power of their work with custom code.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570322cf4b274d716fed4_design-without-limits.avif',
    cta: {
      text: 'Discover Designer',
      link: '/designer'
    }
  },
  {
    id: 'tab2',
    title: 'Create complex, rich interactions',
    subtitle: 'Design scroll-based and multi-step interactions and animations and easily work with GSAP, Spline, 3D, Lottie, and Rive — all without even thinking about code.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/complex-rich-animations.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057032ad30932a68cd9d18_animations.avif',
    cta: {
      text: 'Discover Interactions',
      link: '/interactions-animations'
    }
  },
  {
    id: 'tab3',
    title: 'Empower everyone to build on-brand sites',
    subtitle: 'Give less technical teams the tools they need to build confidently with reusable design systems powered by variables, components, and libraries.',
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/build-on-brand-sites.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67058d52036e5522e27966de_build-on-brand.avif',
    cta: {
      text: 'Discover page building',
      link: '/page-building'
    }
  },
  {
    id: 'tab4',
    title: 'Create even faster with the CodeTutor AI Assistant',
    subtitle: "CodeTutor's AI Assistant lets you build faster and more efficiently by applying your site's existing design system to new page sections.",
    video: 'https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/webflow-ai-assistant.mp4',
    poster: 'https://cdn.prod.website-files.com/66e88746834b80507cdf7933/670570323f08ce0aed3368e4_ai-assistant.avif',
    cta: {
      text: 'Discover AI Assistant',
      link: '/ai'
    }
  }
];
const DesignSection = () => {
  

  const [activeTab,setActiveTab]=useState('tab1')
  const[isPlaying,setIsPlaying]=useState(true)
  const[progress,setProgress]=useState(0)

  const progressInterval =useRef(null)
  const PROGRESS_DURATION=10000;
  const UPDATE_INTERVAL=100;

  useEffect(()=>{
    startProgressTimer()
    return ()=> clearInterval(progressInterval.current)
  },[activeTab])

  const startProgressTimer= ()=>{

    setProgress(0);
    clearInterval(progressInterval.current)

    progressInterval.current=setInterval(()=>{
      setProgress(prev=>{
        if(prev >=100){
          //move to next tab
          const currentIndex =tabsData.findIndex(tab=> tab.id===activeTab)
          const nextIndex= (currentIndex + 1) % tabsData.length
          setActiveTab(tabsData[nextIndex].id)
        }
        return prev + (UPDATE_INTERVAL/ PROGRESS_DURATION * 100)
      })
    },UPDATE_INTERVAL)

  }
  // handleNextClick

  const handleTabClick=(tabId)=>{
    setActiveTab(tabId)
    setIsPlaying(true)
    setProgress(0)

  }

  //toggle video play and pause
  const togglePlayPause=()=>{
    setIsPlaying(!isPlaying)

    const video = document.querySelector(`video[data-tab="${activeTab}"]`)

    if(video){
      if(isPlaying){
        video.pause();
        clearInterval(progress.current)
      }
      else{
        video.play()
        startProgressTimer();
      }
    }
  }



  return (
    <div className="  overflow-hidden py-24 bg-black text-white">
      <div className="primary-container">
        {/* header */}
        <div className="max-w-[50rem] lg:mb-24 mb-12">
          <h2 className="sm:text-6xl text-5xl md:text-7xl font-bold text-white mb-8 ">
            Launch pixel-perfect sites
          </h2>
        </div>

        {/* content grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* content  */}
          <div className=" flex flex-col justify-between gap-16">
            {/* sub heading and button  */}
            <div>
              <p className="text-2xl text-gray-300">
                Rethink the web dev cycle with CodeTutor. Give your design and
                marketing teams the power to launch sophisticated sites quickly
                — so your dev team can focus on more complex work, not
                pixel-perfect revisions.
              </p>
              <Link className="inline-flex px-4 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-8 ">
                {" "}
                Get Started <span className="font-medium ml-1"> it's free</span>
              </Link>
            </div>

            {/* accordians with progress bar */}
            <div className="space-y-6">

              {
                tabsData.map((tab)=>(
                  <div key={tab.title} 
                  onClick={()=>handleTabClick(tab.id)}
                  className="relative pl-4 cursor-pointer">
                    {/* progress bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800 ">
                      {activeTab=== tab.id && (
                        <div className=" absolute top-0 left-0 w-full bg-blue-600 transition-all duration-100"
                         style={{height:`${progress}%`}}>

                        </div>
                      )}
                    </div>


                    {/* title  */}
                    <h3 className="text-xl font-semibold text-white mb-2">{tab.title}</h3>


                    {/* subtitle  */}
                    <p className={`text-gray-400 transition-all duration-300 ${activeTab===tab.id?'h-auto opacity-100':'h-0  opacity-0 overflow-hidden'}`}>{tab.subtitle}</p>

                  </div>
                ))
              }
            </div>
          </div>

          {/* video  */}
          <div className="relative"> 
            <div className="max-w-[640px] mx-auto">

              {
                tabsData.map((tab)=>(
                  <div key={tab.id} className={`transition-opacity duration-500 ${activeTab===tab.id? 'opacity-100':'opacity-0 hidden'}`}>

                    <video src={tab.video}
                     data-tab={tab.id} 
                     poster={tab.poster}
                     className="w-full rounded-lg"
                     autoPlay
                     muted
                     playsInline
                     loop
                     
                     ></video>

                     {/* bottom text and play icon  */}
                     <div className="flex items-center justify-between mt-4">
                      <Link to={"/"} className="inline-flex items-center text-white hover:text-gray-300 transition-colors "> {tab.cta.text}
                      <HiArrowRight className="ml-2"/>
                       </Link>

                       <button onClick={togglePlayPause} className="p-2 text-white hover:text-gray-400">
                        {
                          isPlaying ? <BsPauseFill size={24}/>:<BsPlayFill size={24}/>
                        }
                       </button>
                     </div>

                  </div>
                ))
              }

            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DesignSection;
