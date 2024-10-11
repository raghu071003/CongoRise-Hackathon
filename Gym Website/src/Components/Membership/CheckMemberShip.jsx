import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

const CheckMemberShip = () => {
    const {accessToken} = useContext(AuthContext)
    const [name,setName]=useState()
    const [membership,setMembership] = useState()
    const validity = '10days'
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.post('http://localhost:4080/checkmembership', {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (res.data.message === 'Membership is active') {
                    setName(res.data.name);
                    setMembership(res.data.membership);
                }
            } catch (error) {
                console.error('Error fetching membership:', error);
            }
        };
    
        fetchData();
    }, []); 
    
  return (
    <div className='mem-bg flex items-center justify-center h-screen w-full fade-in'>
      <div className='border-2 border-white rounded-xl p-8 flex flex-col items-center justify-center'>
        <h1 className='text-white text-5xl m-4'>Membership <span className='text-yellow-400'>Details</span></h1>
        <p className='text-white text-2xl p-4'>username:{name}</p>
        <p className='text-white text-2xl p-4'>Membership: {membership}</p>
        <p className='text-white text-2xl p-4'>Validity: {validity}</p>
        <button className='border border-white text-2xl tracking-widest p-4 rounded-xl text-yellow-400 m-4' onClick={()=>navigate('/packages')}>Renew</button>
      </div>
    </div>
  )
}

export default CheckMemberShip
