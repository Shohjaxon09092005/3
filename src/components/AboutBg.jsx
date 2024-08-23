import React from 'react'
import '../styles/aboutBg.css'
import bg from '../images/AboutBg.svg'
function AboutBg() {
  return (
    <div className='aboutBg' style={{backgroundImage:`url(${bg})`}}>
        <div className="container">
            <h1>About</h1>
        </div>
      
    </div>
  )
}

export default AboutBg
