import React, { useEffect, useState,useContext } from 'react'
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import Loading from '../Loading/Loading';
const Profile = () => {
    const { accessToken } = useContext(AuthContext)
        const [name, setName] = useState()
        const [email, setEmail] = useState()
        const [mobile, setMobile] = useState()
        const [membership, setMembership] = useState()
        const [purchasedOn,setPurchasedOn] = useState('')
        const [time,setTime] = useState('')
        const [expiry,setExpiry] = useState('')
        const [loading,setLoading] = useState(false)
    useEffect(() => { 
        
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.post('https://backendpanthergym.onrender.com/checkmembership', {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setLoading(false);
                if (res.status === 200) {
                    setName(res.data.name);
                    setMembership(res.data.membership);
                    setMobile(res.data.phone);
                    setEmail(res.data.email);
                    setPurchasedOn(res.data.purchasedOn)
                    const timeId = (res.data.timeId)
                    if(Number(timeId) === 1 ) setTime('5:00AM - 7:00AM')
                    if(Number(timeId) === 2 ) setTime('7:00AM - 9:00AM')
                    if(Number(timeId) === 3 ) setTime('4:00PM - 6:00PM')
                    if(Number(timeId) === 4 ) setTime('6:00PM - 8:00PM')
                    if(Number(timeId) === 5 ) setTime('8:00PM - 10:00PM')
                    
                        const [day, month, year] = purchasedOn.split('/');
                        const formattedDate = new Date(`${year}-${month}-${day}`);
                        const expiryDate = new Date(formattedDate);
                        expiryDate.setDate(formattedDate.getDate() + 30);
                        

                        setExpiry(` ${expiryDate.getDate()}/${expiryDate.getMonth() + 1}/${expiryDate.getFullYear()}`);
                    
                }
            } catch (error) {
                setLoading(false);
                console.error('Error fetching membership:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
        {loading ? <Loading toggle={loading} /> : 
            <div className=' profile-bg text-white flex justify-center items-center h-screen w-full fade-in'>
            <div className='overlay'></div>
            <div className='flex flex-col justify-center border p-8 gap-2  rounded-xl z-10'>
                <h1 className='text-center text-5xl m-10'>My <span className='text-yellow-400'>Profile</span></h1>
                <p className='text-2xl'>Username : <span className='border-b border-yellow-400'>{name}</span> </p>
                <p className='text-2xl'>email : <span className='border-b border-yellow-400'>{email}</span></p>
                <p className='text-2xl'>Mobile : <span className='border-b border-yellow-400'>{mobile}</span></p>
                <p className='text-2xl'>Membership : <span className='border-b border-yellow-400'>{membership !== '0' ? `active - ${membership}` : 'inactive'}</span></p>
                <p className='text-2xl'>Purchase Date : <span className='border-b border-yellow-400'>{membership !== '0' ? purchasedOn :  'N/A'}</span></p>
                <p className='text-2xl'>Expiry Date : <span className='border-b border-yellow-400'>{membership !== '0' ?  expiry : 'N/A'}</span> </p>
                <p className='text-2xl'>Timings : <span className='border-b border-yellow-400'>{membership !== '0' ? time : 'N/A'}</span></p>

            </div>
        </div>
    }
        </>
        
    )
}

export default Profile
