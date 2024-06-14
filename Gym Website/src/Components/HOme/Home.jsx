import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-full absolute top-0 left-0 z-0'>
      <div>
        <img src='https://wallpaperaccess.com/full/834286.jpg' className=' bg-auto h-screen w-full bg-no-repeat ' alt="" />
        <div className='absolute z-10 top-[45%] left-[10%]'>
        <h1 className='text-white  text-8xl'>Welcome,</h1>
        <p className='text-orange-400 sub-font font-lg '>Start Your Fitness Journey.</p>
        <button className='border-white border p-4 text-white text-4xl my-8'>Register</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Home
