import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';
const About = () => {
  const[ref, inView] = useInView({
    threshold: 0.5,
  });
  return( 
  <section className="section" id="about" ref={ref}>
    <div className="container  mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row
      lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}  
      <motion.div
      variants={fadeIn('right', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount: 0.3}}
      className="flex-1 bg-about bg-contain bg-no-repeat 
      mix-blend-lighten bg-top hidden lg:flex max-w-[429px] lg:-max-w-[482px]"
      ></motion.div>
      {/* text */}  
      <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.3}}
      className='flex-1'>
        <h2 className='h2 text-accent'>About Me.</h2>
          <p className="mb-6">
          I started my work experience by joining Vodafone UK in July 2017 as a customer service provider, then joined Amazon in September 2018 as a customer service provider.
          In August 2019, I was promoted to the Email and Marketing team; in January 2020, I went to Bites and represented as a Customer Specialist and Web Chat; and then I attempted to change my career to something more challenging.
          By applying to a rotational internship at MRSOOL in May 2020 and being convinced to join the operation team as I have experience in customer service. I finally worked at Directions Media in July 2021 until now
          As a WordPress and front-end developer .
          </p>
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0} end={3} duration={3} />: null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Years of<br />Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ? <CountUp start={0} end={4} duration={3} />: null}
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Projects<br />Completed
              </div>
            </div>
          </div>
        <div className='flex gap-x-8 items-center'>
          <Link to="contact">
          <button className="btn btn-lg">Contact me</button> 
          </Link>
          <Link to="work">
          <a href="#" className="text-gradient btn-link">
            My Protfolio
          </a>
          </Link>
        </div>
      </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
