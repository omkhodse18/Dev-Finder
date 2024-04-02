import React from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import './Navbar.css'

function Navbar({darkMode, setDarkMode}) {

  return (
    <div className='header flex flex-row font-poppins justify-between mt-7'>

        <h1 className={`font-extrabold text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>GIT-FINDER</h1>

        <button className='text-3xl' onClick={()=>setDarkMode(!darkMode)}>
          {
            darkMode ? <MdLightMode color='yellow'/> : <MdDarkMode color='black'/> 
          }
        </button>
    </div>
  )
}

export default Navbar
