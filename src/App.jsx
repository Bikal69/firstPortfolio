import { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/navbar/hero/Hero'
import Parallax from './components/navbar/Parallax/Parallax'
import Services from './components/navbar/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {


  return (
    <div>
<section id="Homepage">
  <Navbar/>
<Hero/>
</section>
<section id="Services"><Parallax type='services'/></section>
<section><Services/></section>
<section id="Portfolio"><Parallax type='portfolio'/></section>
<Portfolio/>
<section id="Contact"><Contact/></section>
{/* <Test/> */}
    </div>
  )
}

export default App
