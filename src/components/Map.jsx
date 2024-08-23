import React from 'react'
import rasm from '../images/locationImg.png'
function Map() {
  return (
    <div className='map'>
        <div className="container">
            <div className="map_img">

            <img src={rasm} alt="" />
            </div>
            <div className="map_wrap">
                <h3>Your city not listed?</h3>
                <p>If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.</p>
                <button>Message Us</button>
            </div>

        </div>
      
    </div>
  )
}

export default Map
