import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import { Link } from 'react-scroll';

//*services data*//
const services = [
  {
    name:'UI/UX Design',
    description: ' Responsible for overall user satisfaction with a product or user interaction',
    link: 'Learn more',
  },
  {
    name:'Development',
    description: ' Work on building and creating websites',
    link: 'Learn more',
  },
  {
    name:'Digital Marketing',
    description: ' Promote brands or services to connect with potential customers using the SEO & adsense',
    link: 'Learn more',
  },
  {
    name:'Product Branding',
    description: ' By designing a website that offers a service that help boosting in the branding process  ',
    link: 'Learn more',
  },
]


const Services = () => {
  return( 
  <section className="section " id="services">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/*Text & Image*/}
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-accent mb-6">What I Do.</h2>
          <h3 className="h3 max-w-[455px] mb-16">
          Experienced Front-End/WordPress Developer with 2 years of experience. Proven track record of developing and optimizing websites, creating digital products, and creating
            engaging user experiences.
          </h3>
         <Link to="work">
          <button className="btn btn-sm">See my work</button>
         </Link>
        </motion.div>
        {/*Services*/}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1'>
          {/*services list*/}
          <div>
            {services.map((service, index) => {
              const { name,description,link } = service;
              return( 
              <div
              className='border-b border-white/20 h-[122px] mb-[38px] flex'
              key={index}>
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary
                  font-semibold mb-6">
                    {name}
                  </h4>
                  <p className="font-secondary leading-tight">
                    {description}
                  </p>
                </div>
                <div className="flex flex-col flex-1 items-end">
                  <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center
                  items-center">
                    <BsArrowUpRight />
                  </a>
                  <a href="#" className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
