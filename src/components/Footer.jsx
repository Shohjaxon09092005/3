import React from 'react'
import bg_img from '../images/footer_img.png'
import apple from '../images/apple.svg'
import play from '../images/play.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/intagram.svg'
import '../styles/footer.css'
import footer_scoot from '../images/scoot_footer.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer' >
      <div className="footer_bg" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="container">
          <div className="footer_wrap">
            <h2>Sign up and Scoot off today</h2>
            <div className="footer_img">
              <span>
                <img src={apple} alt="" />
                <div className="footer_span_cont">
                  <h6>Available on the</h6>
                  <h4>AppStore</h4>
                </div>
              </span>
              <span>
                <img src={play} alt="" />
                <div className="footer_span_cont">
                  <h6>Get it on</h6>
                  <h4>GooglePlay</h4>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_logo_bg">
        <div className="container">
          <div className="footer_logo_grid">
            <div className="footer__log">
              <img src={footer_scoot} alt="" />
              <ul className='footer_list'>
              <NavLink to="/about"><li>About</li></NavLink>
             <NavLink to="/location"> <li>Location</li></NavLink>
             <NavLink to="/careers"><li>Careers</li></NavLink> 
              </ul>
            </div>

            <div className="footer_logo">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Footer
