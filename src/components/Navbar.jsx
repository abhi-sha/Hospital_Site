import React from 'react'
import './navbar.css'
import { Link  } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar-content'>
     <div className='Navbar-basic'>
     <p> <a href='#home'>HOME</a>  </p>
     <p> <a href='#about'>ABOUT </a>  </p>
     <p> <a href='#doctors'>DOCTORS</a> </p> 
     <p> <a href='#Departments'>DEPARTMENTS</a></p>
     </div>
     
    </div>
   
    
  )
}

export default Navbar;
