"use client"
import React from "react"  
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import Link from "next/link";
const HeroSection =()=>{
   return (
   <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
         initial={{opacity:0, scale:0.5}}
          animate={{opacity:1,scale:1}}
           transition={{duration:0.5}}
            className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:twxt-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I am{" "}
                </span>
                <br></br>
                <TypeAnimation
      sequence={[
        'Touseeq',
        1000,
        'Web Devoplemnt', 
        1000,
        'Mobile Devopler',
        1000,
        'UI/UX Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
     
      repeat={Infinity}
    />
        
        </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
      Im a Software Engineer based in Lahore, Pakistan, dedicated to crafting high-quality
               software solutions that enhance efficiency and enrich lives. Lets collaborate to create
                something exceptional! </p>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
          <Link href={'https://pk.linkedin.com'}>  Hire Me</Link>
        </button>
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800  text-white border border-white mt-3">
  <a href="https://www.indeed.com/career-advice/resumes-cover-letters/resume-file-name" download="MyCv.pdf">  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Cv</span>
  </a>
</button>

      </div>
      </motion.div>
      <motion.div
         initial={{opacity:0, scale:0.5}}
          animate={{opacity:1,scale:1}}
           transition={{duration:0.5}} className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
        <Image
        src='/my-profile.jpeg'
        alt='My profile'
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
        width={150}
        height={150}
        />
        </div>
      </motion.div>
      </div>
    </section>
   )
  };

  export default HeroSection;