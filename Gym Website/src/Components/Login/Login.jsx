import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../Context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, login,invalidlogin ,setInvalidLogin} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/');
      return;
    }
    try{
        await login(username, password);
    }
    catch(e){
        console.log(e.message);
    }
  };


  return (
    <div>
      <div className='login-bg flex flex-col justify-center items-center bg-black'>
        <div className='overlay z-0'></div>
        <form className='flex flex-col justify-center items-center border mt-56 p-10 mb-96 z-10 rounded-xl backdrop-blur-sm' onSubmit={handleSubmit}>
          <h1 className='text-center text-white text-5xl border-b-2 m-3'>Log<span className='text-yellow-400'>in</span></h1>
          <input type="text" placeholder='Username' id='username' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='password' id='password' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' onChange={(e) => setPassword(e.target.value)} />
          <p className='text-white text-xl m-4'>Dont have an account? <span className='text-yellow-400 cursor-pointer' onClick={() => navigate('/register')}>Register Here</span></p>
          <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' type='submit'>Login</button>
        </form>
      </div>      
    </div>
  );
};

export default Login;
