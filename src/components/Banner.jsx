import React from 'react'
import '../styles/banner.css'
import rasm1 from '../images/Group 8.svg'
import rasm2 from '../images/Group 9.svg'
import rasm3 from '../images/Group 10.svg'
function Banner() {
  return (
    <div className='banner'>
        <div className="container">
            <div className="banner_wrap">
                <div className="banner_card">
                    <img src={rasm1} alt="" />
                    <div className="banner_content">
                        <h3>Locate with app</h3>
                    <p>Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. </p> 
                    </div>
                   
                </div>
                <div className="banner_card">
                    <img src={rasm2} alt="" />
                    <div className="banner_content">
                      <h3>Pick your scooter</h3>
                    <p>We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost. </p>  
                    </div>
                    
                </div>
                <div className="banner_card">
                    <img src={rasm3} alt="" />
                    <div className="banner_content">
                        <h3>Enjoy the ride</h3>
                    <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.</p> 
                    </div>
                   
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Banner
