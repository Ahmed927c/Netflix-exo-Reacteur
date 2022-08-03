import React from 'react'
import logo from '../assets/pictures/logo.png'
import '../Header.css'

const Header = () => {
  return (
   <header>
    <a href="">
        <img src={logo} alt="logo netflix" />
    </a>
   </header>
  )
}

export default Header