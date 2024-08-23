import React from 'react'
import '../styles/our.css'
import  rasm1 from '../images/our1.png'
import  rasm2 from '../images/our2.png'
import  rasm3 from '../images/our3.png'

function Our({title}) {
  return (
    <div className='our'>
        <div className="container">
            <h2>{title}</h2>
                <div className="our_wrapper">
                    <div className="our_card">
                        <img src={rasm1} alt="" />
                        <h4>Our tech</h4>
                        <p>We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!</p>
                    </div>
                    <div className="our_card">
                        <img src={rasm2} alt="" />
                        <h4>Our integrity</h4>
                        <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.</p>
                    </div>
                    <div className="our_card">
                        <img src={rasm3} alt="" />
                        <h4>Our community</h4>
                        <p>We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.</p>
                    </div>
                </div>



        </div>
      
    </div>
  )
}

export default Our
