import React from 'react'
import AboutBg from '../components/AboutBg'
import GroopCard from '../components/GroopCard'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import GroopCardRew from '../components/GroopCardRew'
import '../styles/about.css'
import Our from '../components/Our'
import Faqs from '../components/Faqs'

function About() {
  return (
    <main className='about'>
      <AboutBg/>
      <GroopCard title="Mobility for the digital era" desc="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips." img={about1}/>
      <GroopCardRew title="Better urban living" desc="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride." img={about2}/>
      <Our title="Our values"/>
      <Faqs/>
    </main>
  )
}

export default About
