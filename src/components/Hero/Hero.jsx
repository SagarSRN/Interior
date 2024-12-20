import React from 'react'
import Heroimage from '../../assets/Hero.png'
import {motion} from "framer-motion"
import {SlideUp} from "../Animation/animate"

const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[450px] gap-10">
      {/* Text Section */}
      <div className='flex flex-col justify-center gap-5 p-5 md:pr-16 lg: pr-8 text-center md:text-left pt-12'>
        <motion.h1 
        variants={SlideUp(0.5)}
        initial = "initial"
        animate = "animate"
         className='text-3xl font-bold'>DESIGN LUXURY INTERIOR DESIGN

        </motion.h1>
        <motion.p
        variants={SlideUp(0.8)}
        initial = "initial"
        animate = "animate">
          Bring your dream to life with one-on-one design help & hand-picked 
          products tailored to your style, space, and budget.
        </motion.p>
        <div className='space-x-4'>
          <motion.button
          variants={SlideUp(0.20)}
          initial = "initial"
          animate = "animate"
           className='primary-btn uppercase bg-black text-white hover:shadow-[5px_5px_0px_0px_#6c6c6c]'>
            Get Started
          </motion.button>
          <motion.button 
          variants={SlideUp(0.20)}
          initial = "initial"
          animate = "animate"
          className='primary-btn uppercase'>
            Contact
          </motion.button>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex justify-center items-center p-5 md:scale-125'>
        <motion.img 
        initial = {{x: 100, opacity: 0}}
        animate = {{x:0, opacity:100}}
        transition={{duration:0.5, delay:0.2}}
        src={Heroimage} alt="Hero" className='h-[300px] w-full object-cover' />
      </div>
    </div>
  )
}

export default Hero
