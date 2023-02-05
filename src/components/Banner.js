import React from 'react';
import Image from '../assets/avatar.png'; 
import {FaLinkedinIn, FaGithub, FaFacebookF} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
const Banner = () => {
  return ( 
  <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
   id="home"
   >
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center
      lg:gap-x-12">
        {/*text*/}
      <div className="flex-1 text-center font-secondary lg:text-left">
      <motion.h1 
      variants={fadeIn('up' , 0.3)} 
      initial="hidden" 
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className="text-[55px] fot-bold leading-[0.8] lg:text-[110px]">
        Abdelrahman <span>Moataz</span>
      </motion.h1>
      <motion.div
      variants={fadeIn('up' , 0.3)} 
      initial="hidden" 
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='mb-6 text-[36px] lg:text-[60px] font-secondary
      font-semibold uppercase leading-[1]'>
      <span className='text-white mr-4'>I am a</span>
      <TypeAnimation 
      sequence={[
        'Front-End Developer',
        2000,
        'Web-Designer',
        2000,
        'UI/Ux Designer',
        2000,
      ]}
      speed={50}
      className='text-accent'
      wrapper='span'
      repeat={Infinity}
      />
      </motion.div>
      <motion.p
      variants={fadeIn('up' , 0.5)} 
      initial="hidden" 
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='mb-8 max-w-lg mx-auto lg:mx-0'>
      Welcome to my portfolio website , Let's start the journey together by showing you why to choose me .
      </motion.p>
      <motion.div
      variants={fadeIn('up' , 0.6)} 
      initial="hidden" 
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='flex max-w-max gap-x-6 items-center mb-12
      mx-auto lg:mx-0'>
        <button className='btn btn-lg'>Contact me</button>
        <a href='#' className='text-gradient btn-link'>My Portfolio</a>
      </motion.div>
      {/* socials*/}
      <motion.div
      variants={fadeIn('up' , 0.7)} 
      initial="hidden" 
      whileInView={'show'}
      viewport={{once: true, amount: 0.7}}
      className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <a href='https://www.facebook.com/Bibo1911/'>
          <FaFacebookF />
        </a>
        <a href='https://github.com/bibo1999'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/abdelrahman-moataz-353970190/'>
          <FaLinkedinIn />
        </a>
      </motion.div>
    </div>
      {/*image*/}
      <motion.div
      variants={fadeIn('down' , 0.5)} 
      initial="hidden" 
      whileInView={'show'}
      className='hidden lg:flex flex-1 max-w-[320px] lg:-max-w-[482px]
      '>
      <img src={Image} alt="" />
      </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Banner;
