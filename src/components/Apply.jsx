import React from 'react'
import '../styles/apply.css'
function Apply({title,desc,btn_text}) {
  return (
    <div className='apply'>
        <div className="container">
            <div className="apply_wrapper">
                <div className="apply_content">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
                <button>{btn_text}</button>
            </div>
        </div>
      
    </div>
  )
}

export default Apply
