import React from 'react'
import './hero.scss'
import {motion} from  'framer-motion'
const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}
const slideVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"-100%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20,
    }
  },
}
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
        <motion.h2 >Bikal Niroula</motion.h2>
        <motion.h1>Web Developer and UI/UX designer</motion.h1>
        <motion.div className="buttons">
          <motion.button variants={textVariants}>See the latest Works</motion.button>
          <motion.button variants={textVariants}>Contact Me</motion.button>
        </motion.div>
        <motion.img src="/scroll.png" alt="scroll image" variants={textVariants} animate='scrollButton'  />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer
      " variants={slideVariants} animate='animate' initial='initial'>
        Developer Gamer Math Enthusiast
      </motion.div>
    <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
    </div>
    </div>
  )
}

export default Hero