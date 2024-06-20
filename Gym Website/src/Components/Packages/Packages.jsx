import React, { useContext } from 'react'
import { packages } from '../../assets/data'
import PackageCard from './PackageCard'
import JoinNow from '../JoinNow/JoinNow'
import { useState,useEffect } from 'react'
import AuthContext from '../Context/AuthContext'

const Packages = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`${windowWidth>700 ? 'package-bg' : 'bg-black'}`}>
      <div className='overlay'></div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className=" text-white mt-36 z-10 text-5xl border-b-2">Our <span className='text-yellow-400'>Packages</span></h2>
        <div className='flex flex-1  flex-wrap justify-center mt-20 gap-5 m-10 mb-80'>
            {packages.map((item,i)=>{
              return <PackageCard type={item.type} Description={item.Description} Price={item.Price} Features={item.Features} />
            })}
        </div>
      </div>
      <JoinNow />
    </div>
  )
}

export default Packages
