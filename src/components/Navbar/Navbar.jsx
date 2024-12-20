import React, { useState } from 'react';
import Logo from '../../assets/Logo1.jpg';
import { FiMenu, FiX } from 'react-icons/fi'; 
import {motion} from "framer-motion"
import { SlideLeft, SlideUp } from '../Animation/animate';

const Navlinks = [
  { id: 1, title: 'About Us', link: '#' },
  { id: 2, title: 'Services', link: '#' },
  { id: 3, title: 'Projects', link: '#' },
  { id: 4, title: 'Contact Us', link: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container py-4 flex justify-between items-center px-4 md:px-0">
      {/* Logo and Title Section */}
      <div className="flex items-center">
        <motion.img 
        variants={SlideUp(0.4)}
        initial= "initial"
        animate= "animate"
        src={Logo} alt="logo" className="w-12 sm:w-16" />
        <span className="text-xl sm:text-2xl font-bold ml-2">INTERIOR</span>
      </div>

      {/* Hamburger Menu (for mobile) */}w
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={16} />}
      </div>

      {/* Link Section - hidden on mobile */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row flex-1 md:items-center md:justify-center absolute md:static top-16 left-0 w-full bg-white md:bg-transparent p-4 md:p-0 z-10`}
      >
        {Navlinks.map((link) => (
          <motion.a
          variants={SlideUp(0.6)}
          initial="initial"
          animate="animate"
            key={link.id}
            href={link.link}
            className="block text-center md:inline-block mx-4 my-2 md:my-0 text-lg font-semibold"
            onClick={() => setMenuOpen(false)} // close menu on link click
          >
            {link.title}
          </motion.a>
        ))}
      </div>

      {/* Button Section */}
      <motion.button
      variants={SlideUp(0.6)}
      initial="initial"
      animate="animate"
       className="primary-btn hidden md:inline-block">
        Try For Free
      </motion.button>
    </div>
  );
};

export default Navbar;
