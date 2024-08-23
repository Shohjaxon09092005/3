import React from 'react'
import '../styles/groop.css'
function GroopCardRew({ title, desc, btn_text, img }) {
  return (
    <div className='groopRew'>
       <div className="container">
                <div className="groop_wrapper">
                    <img src={img} alt="" />
                    <div className="groop_content">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <button>{btn_text}</button>
                    </div>
              
                </div>
            </div>

    </div>
  )
}

export default GroopCardRew
