import React from 'react'
import hero from '../images/hero.jpg'
import '../styles/hero.css'
function Hero() {
    return (
        <div className='hero' style={{ backgroundImage: `url(${hero})` }}>
            <div className="container">
                <div className="hero_content">
                    <h1>Scooter sharing made simple</h1>
                    <div className="hero_desc">
                        <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
                        <button>Get Scootin</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero
