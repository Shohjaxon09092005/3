import React from 'react'
import '../styles/groop.css'
function GroopCard({ title, desc, btn_text, img }) {
    return (
        <div className='groopCard'>
            <div className="container">
                <div className="groop_wrapper">
                    <div className="groop_content">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button>{btn_text}</button>
                    </div>
                    <img src={img} alt="" />
              
                </div>
            </div>

        </div>
    )
}

export default GroopCard
