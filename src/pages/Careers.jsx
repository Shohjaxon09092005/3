import React from 'react'
import CareersBg from '../components/CareersBg'
import GroopCard from '../components/GroopCard'
import careers from '../images/careersLogo.png'
import Our from '../components/Our'
import Apply from '../components/Apply'
import '../styles/apply.css'
function Careers() {
  return (
    <main className='careers'>
      <CareersBg title="aaa"/>
      <GroopCard title="Care to join our mission?" desc="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!" btn_text="Say Hello" img={careers}/>
      <Our title="Why join us?"/>
      <Apply title="General Manager" desc="Jakarta, Indonesia" btn_text="Apply"/>
      <Apply title="UI/UX Designerr" desc="Yokohama, Japan" btn_text="Apply"/>
      <Apply title="Blog Content Copywriter" desc="New York, United States" btn_text="Apply"/>
      <Apply title="Graphic Designer" desc="New York, United States" btn_text="Apply"/>
      <Apply title="Fleet Supervisor" desc="Jakarta, Indonesia" btn_text="Apply"/>
      <Apply title="UX Analyst" desc="London, United Kingdom" btn_text="Apply"/>
    </main>
  )
}

export default Careers
