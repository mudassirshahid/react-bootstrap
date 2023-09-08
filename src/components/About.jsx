import React from 'react'
import BgImage from './BgImage'
import hero from '../assets/hero-bg.jpg'
import Home from './Home'
const About = () => {
  return (
    <div>
      <Home />
      {/* <BgImage  backgroundImage={hero} /> */}
      <h1 className="about">About</h1>
    </div>
  )
}

export default About
