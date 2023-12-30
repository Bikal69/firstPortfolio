import React from 'react'
import  './navbar.scss'
import {motion} from 'framer-motion'
import Sidebar from './sidebar/Sidebar'
const Navbar = () => {
  return (
    <div className='navbar'>
{/* sidebar */}
<Sidebar/>.
<div className="wrapper">
    <motion.span initial={{
      opacity:0,scale:0.5
    }} animate={{
      opacity:1,scale:1
    }}
    transition={{duration:0.5}}>Rhino Dev</motion.span>
    <div className="social">
        <a href="#"><img src="/firstPortfolio/facebook.png" alt="facebookLogo" /></a>
        <a href="#"><img src="/firstPortfolio/instagram.png" alt="instaLogo" /></a>
        <a href="#"><img src="/firstPortfolio/youtube.png" alt="youtubeLogo" /></a>
        <a href="#"><img src="/firstPortfolio/dribbble.png" alt="dribbleLogo" /></a>
    </div>
</div>
    </div>
  )
}

export default Navbar