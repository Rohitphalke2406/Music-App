import React from 'react'
import { assets } from '../assets/assets'
import { Avatar } from '@mui/material'
import { deepPurple, red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 cursor-pointer rounded-2xl hidden md:block'>Explore Premium</p>
            <p className='bg-black text-white rounded-2xl text-[15px] py-2 px-3 cursor-pointer'>Install App</p>
            <Avatar sx={{width:30, height:30, bgcolor:deepPurple[500]}}>R</Avatar>
        </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer font-semibold'>ALL</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar
