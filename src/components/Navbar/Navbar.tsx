import React, { useState } from 'react'
import './Navbar.css'
import prizeetlogo from "../../assets/prizeet.svg"
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

const Navbar : React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(prev => !prev)
  return (
    <div className='navbar'>
        <div className="nav">
            <div className='body'>
                <div className="body-section1">
                    <button  onClick={toggleMenu}><Icon icon="solar:hamburger-menu-outline" width="24" height="24" style={{ color: '#111111' }}/></button>
                    <a href="/"><img src={prizeetlogo} alt="" /></a>
                    <div className='hidden-menu-lists'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdeognUfGQs28lrATNNDfXZUnQSh0MEslbpFC8VGDvt4iFSgg/viewform"><span>Become a Vendor</span></a>
                        <a href="about"><span>About</span></a>
                        <a href="contact"><span>Contact</span></a>
                    </div>

                </div>
                <div className="body-section2">
                    <div className="body">
                        <button className='button1'><Icon icon="solar:magnifer-outline" className='span1'/></button>
                        <button className='button2'> <Icon icon="solar:user-outline" className='span2'/></button>
                        <button className='button3'>
                            <span className='span3'>0</span>
                            <span className='span3-2'>
                             <Icon icon="solar:cart-large-minimalistic-outline" className="cart-icon" width="24" height="24"/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className={`nav-overlay ${openMenu ? "open" : "close"}`}>
                        <ul className="nav-links">
                            <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }>
                                Home
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }>
                                About
                            </NavLink>
                            </li>
                            <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }>
                                Contact
                                </NavLink>
                                </li>

                            <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }>Products
                            </NavLink>  
                            

                            </li>

                            <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "active-link" : ""
                            }>Become a Vendor
                            </NavLink>  
                            

                            </li>

                        </ul>
        </div>
      
    </div>
  )
}

export default Navbar
