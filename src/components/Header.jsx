import React, { useRef } from 'react'
import '../styles/header.css'
import logo from '../images/scoot.svg'
import burger from '../images/burger.svg'
import icon from '../images/icon-menu-close.svg'
import { NavLink } from 'react-router-dom'
function Header() {
  let modal = useRef()
  let bur = useRef()
  let ico = useRef()
  function burgerOpen() {
    modal.current.classList.add("open")
    bur.current.classList.add("del")
    ico.current.classList.add("open")
  }
  let delIcon = () => {
    modal.current.classList.remove("open")
    bur.current.classList.remove("del")
    ico.current.classList.remove("open")
  }
  return (
    <div className='header'>
      <div className="container">
        <div ref={modal} className="modal">

          <div className="modal_wrap">

            <ul className='modal_list'>
             <NavLink to="/about"><li>About</li></NavLink>
             <NavLink to="/location"> <li>Location</li></NavLink>
             <NavLink to="/careers"><li>Careers</li></NavLink> 
            </ul>
            <button>Get Scootin</button>
          </div>



        </div>
        <div className="header_wrapper">
          <div className="burger">
            <img ref={bur} onClick={burgerOpen} src={burger} alt="" />
          </div>
          <div onClick={delIcon} ref={ico} className="icon">
            <img src={icon} alt="" />

          </div>
          <div className="logo">
          <NavLink to="/"><img src={logo} alt="" /></NavLink> 
          </div>
          <div className="header_logo">
           <NavLink to="/"><img src={logo} alt="" /></NavLink> 
            <ul className='header_list'>
             <NavLink to="/about"> <li>About</li></NavLink>
              <li>Location</li>
              <li>Careers</li>
            </ul>

          </div>
          <button>Get Scootin</button>
        </div>


      </div>

    </div>
  )
}

export default Header
