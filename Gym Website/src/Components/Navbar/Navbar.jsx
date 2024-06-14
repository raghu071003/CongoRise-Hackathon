import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-orange-400 w-full flex justify-center gap-14 p-8 z-10 sticky'>
        <div className='flex gap-6 text-2xl justify-center items-center'>
            <p>Packages</p>
            <p>Timings</p>
        </div>
      <div className=' leading-[0] flex flex-col' >
        <p className='text-4xl font-semibold tracking-widest'>Panther</p>
        <p className='sub-font font-2xl font-bold tracking-wider text-white text-end'>Fitness</p>
      </div> 
      <div className='flex gap-6 text-2xl justify-center items-center'>
            <p>Gym Gears</p>
            <p>Offers </p>
        </div>
    </div>
  )
}

export default Navbar
