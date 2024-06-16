import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className=' login-bg flex flex-col justify-center items-center bg-black'>
        <div className='overlay z-0'></div>
        <div className='flex flex-col justify-center items-center border mt-56 p-10 mb-36 z-10 rounded-xl backdrop-blur-sm'>
        <h1 className=' text-center text-white text-5xl border-b-2 m-3'>Log<span className='text-yellow-400'>in</span></h1>
        <input type="text" placeholder='Username' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white'/>
        <input type="password" placeholder='password' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' />
        <p className='text-white text-xl m-4'>Dont have an account? <span className='text-yellow-400 cursor-pointer' onClick={()=>navigate('/register')}>Register Here</span> </p>
        <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black'>Login</button>
        </div>
        
      </div>
    </div>
  )
}

export default Login
