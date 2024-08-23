import React from 'react'
import '../styles/aboutBg.css'
import bg from '../images/AboutBg.svg'
function CareersBg({title}) {
  return (
    <div className='careersBg'>
      <div className='aboutBg' style={{backgroundImage:`url(${bg})`}}>
        <div className="container">
            <h1>{title}</h1>
        </div>
      
    </div>
    </div>
  )
}

export default CareersBg
