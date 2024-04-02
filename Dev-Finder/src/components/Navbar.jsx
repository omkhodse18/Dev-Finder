import React from 'react'
import { MdLightMode } from "react-icons/md";
import './Navbar.css'
function Navbar() {
  return (
    <div className='header flex flex-row font-poppins justify-between mt-7'>
      
        <h1 className='font-semibold text-2xl'>DEV-FINDER</h1>

        <button className='text-3xl'>
          <MdLightMode/>
        </button>
    </div>
  )
}

export default Navbar
