import React from 'react'
import img1 from '../images/brand_logo.png'

function Navbar() {
  return (
    <header className='shadow-md sticky ' >
      <nav className= 'flex items-center justify-between h-20 mx-16' >
        <div>
            <img src={img1} alt="" />
        </div>
        <ul className='flex gap-5' >
          <li   ><a  className='text-xl font-normal hover:text-red-500 duration-500 ' href="">Menu</a></li>
          <li ><a className='text-xl font-normal hover:text-red-500 duration-500 ' href="">About</a></li>
          <li ><a className='text-xl font-normal hover:text-red-500 duration-500 ' href="">Shop</a></li>
          <li ><a className='text-xl font-normal hover:text-red-500 duration-500 ' href="">Contact</a></li>
        </ul>
        <div>
          <button className='bg-red-500 text-white px-5 py-2 rounded-lg' >Login</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
