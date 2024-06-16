import React from 'react';

const Register = () => {
  return (
    <div>
      <div className='overlay z-0'>
      </div>
      <div className='regbg w-full min-h-screen flex items-center justify-center z-10 gap-10 flex-wrap'>
        <div className='overlay'></div>
        <div className='mt-34 flex flex-col md:flex-row justify-around items-center max-w-screen-lg p-5 md:p-10 backdrop-blur-md rounded-xl shadow-xl border'>
          <div className='flex flex-col justify-center items-center md:mr-10'> 
            <h1 className='text-white text-4xl text-center mb-2'>Panther <span className='text-yellow-400'>GYM</span></h1>
            
            <form action="" className='flex flex-col items-center justify-center  w-96 '>
                    <input type="text" placeholder='Username' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white ' />
                    <input type="email" placeholder='Email' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' />
                    <input type="password" placeholder='password' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' />
                    <input type="number" placeholder='Mobile' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' />
                    <p className='text-white text-xl m-4'>Dont have an account? <span className='text-yellow-400 cursor-pointer' onClick={() => navigate('/register')}>Register Here</span> </p>
                    <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black'>Register</button>
            </form>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Register;
