import React from 'react';
import { gears } from '../../assets/data';
import GearCard from './GearCard';
import { useState,useEffect } from 'react';

const GymGears = () => {
  useEffect(()=>{
    document.getElementById('gymgears').classList.add('zoom-in-fast')
    document.getElementById('gear-cont').classList.add('fade-in')
  })
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`${windowWidth > 1024 ? 'gym-bg  flex flex-col items-center ' :' bg-black flex flex-col items-center '}` } id='gear-cont' >
      <div className='overlay'></div>
      <h1 className='text-white text-5xl z-10 border-b-2 mt-36 mb-8 '>GYM <span className='text-yellow-400'>GEAR</span></h1>
      
     <div className='flex justify-center items-center 'id='gymgears'>
      
     <div className='cards-gear gap-5 flex-1 justify-center items-center grid m-10'>
        {gears.map((item, i) => (
          <GearCard key={i} name={item.name} img={item.img} link={item.link} />
        ))}
      </div>
     </div>
      
    </div>
  );
}

export default GymGears;
