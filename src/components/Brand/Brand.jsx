import React from 'react';
import logo1 from '../../assets/BrandLodha.png';
import logo2 from '../../assets/brandLT.png';
import logo3 from '../../assets/brandReliance.png';
import logo4 from '../../assets/brandshapoorji.png';
import logo5 from '../../assets/BrandRustomjee.png';
import { motion } from 'framer-motion';
import { SlideLeft } from '../Animation/animate';

const Brand = () => {
  return (
    <>
      <div className="container py-14 md:py-14">
        <div className="flex flex-wrap lg:justify-between gap-4">
          <motion.img variants={SlideLeft(0.2)} initial="initial" whileInView="animate" src={logo1} alt="logo" className="w-[140px]" />
          <motion.img variants={SlideLeft(0.4)} initial="initial" whileInView="animate" src={logo2} alt="logo" className="w-[140px]" />
          <motion.img variants={SlideLeft(0.6)} initial="initial" whileInView="animate" src={logo3} alt="logo" className="w-[140px]" />
          <motion.img variants={SlideLeft(0.8)} initial="initial" whileInView="animate" src={logo4} alt="logo" className="w-[140px]" />
          <motion.img variants={SlideLeft(1.0)} initial="initial" whileInView="animate" src={logo5} alt="logo" className="w-[140px]" />
        </div>
      </div>
    </>
  );
};

export default Brand;
