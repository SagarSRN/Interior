import React from 'react';
import banner2 from '../../assets/Banner2.jpg';
import {motion} from "framer-motion"
import { SlideUp, SlideLeft } from '../Animation/animate';

const Banner2 = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* text section */}
        <div className='space-y-4 flex justify-center flex-col'>
          <motion.h1
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
           className='text-3xl font-bold'>
            We Beleive in Design, We Provide Quality & Maintanence 
          </motion.h1>
          <motion.p
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
           className='text-gray-500 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo eligendi mollitia possimus nostrum repellat, earum, quisquam fuga quidem ex ipsa error sint.
          </motion.p>
          <div>
            <motion.button
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
             className='primary-btn'>Discover Now</motion.button>
          </div>
        </div>

        {/* image section */}
        <div className='flex justify-center items-center'>
          <motion.img
          variants={SlideLeft(0.6)}
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:100}} 
            src={banner2} 
            alt="Banner" 
            className='w-[90%] md:w-[320px] xl:w-full' 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
