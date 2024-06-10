import React from 'react'
import './home.css';
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Data from '../components/data/Data'
import Exp from '../components/expwork/Exp';
import Skill from '../components/skills/Skill';
import Mask from '../components/mask/Mask';
import Footer from '../components/footer/Footer';


const Home = () => {
  return (
    <div className='parent'>
      <Navbar />
      <Data />
      <About />
      <Exp />
      <Skill />
      <Mask />
      <Footer />
    </div>
  )
}

export default Home