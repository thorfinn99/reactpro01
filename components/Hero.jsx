import React from 'react'
import img2 from '../images/amazon.png'
import img3 from '../images/flipkart.png'
import img4 from '../images/hero-image.png'

function Hero() {
  return (
    <div className='flex justify-between'>
    <div className='ml-20 mt-14' >
      <div className='font-bold text-9xl ' >YOUR FEET <br /> DESERVES <br /> THE BEST</div>
      <p className='font-light mt-5 ml-5' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quas culpa, <br /> iste earum labore quo similique repellendus adipisci, saepe officia tempore <br /> enim commodi ad optio aliquam? Ad qui ipsa nulla.</p>
      <div className='mt-2 ml-5' >
        <button className='bg-red-500 px-4 shadow-md py-1 text-white rounded-lg mr-5' >SHOP NOW</button>
        <button className='border-black rounded-md border-2 px-4 py-1' >Category</button>
      </div>
      <p className='ml-5 tracking-widest mt-3' >Also Available on</p>
      <div className='flex ml-10' >
        <img className='mr-5 pt-2' src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
    <div>
    <img className='mt-20' src={img4} alt="" />
    </div>
    </div>
  )
}

export default Hero