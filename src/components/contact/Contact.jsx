import './contact.scss'
import {motion} from 'framer-motion'
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}

const Contact = () => {
  return (
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'> 
 <motion.div className="textContainer" variants={variants}>
    <motion.h1>Let's work together</motion.h1>
    <motion.div className="item" variants={variants}>
        <h2>Mail</h2>
        <span>hello@react.dev</span>
    </motion.div>
    <motion.div className="item" variants={variants}>
        <h2>Address</h2>
        <span>Hello street New York</span>
    </motion.div>
    <motion.div className="item" variants={variants}>
        <h2>Phone</h2>
        <span>+977-9824352893</span>
    </motion.div>
 </motion.div>
 <motion.div className="formContainer">
 <form>
    <input type="text" required placeholder='Name' />
    <input type="email" required placeholder='Email' />
    <textarea name="" id=""  rows="8" placeholder='Message'/>
    <button>Submit</button>
 </form>
 </motion.div>
    </motion.div>
  )
}

export default Contact