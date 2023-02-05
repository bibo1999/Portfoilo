import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import Img1 from '../assets/animals-egypt.png';
import Img2 from '../assets/gmisr-eg.PNG';
import Img3 from '../assets/old-portfolio.PNG';
const Work = () => {
  return(

   <section className="section" id='work'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-x-10">
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className="h2 leading-tight text-accent">My Latest <br/>
            Work.
            </h2>
            <p className="max-w-sm mb-16">
              Worked on these projects with basic Html, CSS , Javascript integrated with WordPress & one 
              of them by ReactJs .
            </p>
            <button className="btn btn-sm">View all projects</button>
          </div>
          {/* image */}
          <div className="group relative overflow-hidden border-2
          border-white/50 rounded-xl">
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500"
             src={Img1} alt="" />
            {/* pretitle */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">
                Front-end
              </span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3x1">Animals Egypt</span>
            </div>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className="flex-1 flex flex-col gap-y-12 justify-end">
          {/* image */}
          <div className="group relative overflow-hidden border-2
          border-white/50 rounded-xl">
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500"
             src={Img2} alt="" />
            {/* pretitle */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">
                Front-end
              </span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3x1">gmisr-eg</span>
            </div>
          </div>
                    {/* image */}
                    <div className="group relative overflow-hidden border-2
          border-white/50 rounded-xl">
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500"
             src={Img3} alt="" />
            {/* pretitle */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">
                Front-end (ReactJS)
              </span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12
            group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3x1">My old portfolio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  
   );
};

export default Work;
