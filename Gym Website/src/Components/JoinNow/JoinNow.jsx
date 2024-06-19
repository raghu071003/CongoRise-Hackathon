import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const JoinNow = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed bottom-3 right-3 z-50 ${isVisible ? 'flex' : 'hidden'} flex-col backdrop-blur-xl text-white border w-80 items-center justify-center rounded-xl p-4`}>
            <img src="https://www.nicepng.com/png/full/52-521935_close-button-png.png" alt=""  className='w-10 absolute top-3 right-3 cursor-pointer' onClick={(prev)=>setIsVisible(!prev)}/>
            <h1 className='text-xl text-yellow-400 text-center mt-10'>Start your fitness journey Now with affordable prices.</h1>
            {!isAuthenticated ? <button className='border-2 border-yellow-400 p-4 rounded-xl m-3 hover:bg-white hover:text-black' onClick={() => navigate('/register')}>Join Now</button>
            :
            <button className='border-2 border-yellow-400 p-4 rounded-xl m-3 hover:bg-white hover:text-black' onClick={() => navigate('/payment')}>Get Membership</button>
            }
            
        </div>
    );
}

export default JoinNow;
