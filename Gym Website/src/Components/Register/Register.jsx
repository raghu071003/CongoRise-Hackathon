import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../Context/Context';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [Name,setName] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [mobile,setMobile] = useState('')
  const {isAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',Name);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('mobile',mobile);
    console.log(isAuthenticated);
    const response = axios.post('http://localhost:4080/register',formData,{
      headers:{
        "Content-Type":'application/json'
      }
    })
    if(response.status === 200){
      alert("Successfully Registered,Please Login!")
    }
  }
  return (
    <div>
      <div className='overlay z-0'>
      </div>
      <div className='regbg w-full min-h-screen flex items-center justify-center z-10 gap-10 flex-wrap'>
        <div className='overlay'></div>
        <div className='mt-34 flex flex-col md:flex-row justify-around items-center max-w-screen-lg p-5 md:p-10 backdrop-blur-md rounded-xl shadow-xl border'>
          <div className='flex flex-col justify-center items-center md:mr-10'> 
            <h1 className='text-white text-4xl text-center mb-2'>Panther <span className='text-yellow-400'>GYM</span></h1>
            
            <form action="" className='flex flex-col items-center justify-center  w-96 ' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white ' onChange={(e)=>setName(e.target.value)} />
                    <input type="email" placeholder='Email' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder='password' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' onChange={(e)=>setPassword(e.target.value)}  />
                    <input type="number" placeholder='Mobile' className='outline-none bg-transparent text-2xl m-3 p-4 border-b-2 text-white' onChange={(e)=>setMobile(e.target.value)}  />
                    <p className='text-white text-xl m-4'>Aldready have an account? <span className='text-yellow-400 cursor-pointer' onClick={() => navigate('/login')}>Login</span> </p>
                    {isAuthenticated ?  <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' >Check MemberShip</button>
                    :
                    <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' type='submit'>Register</button>
                    }
            </form>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

export default Register;
