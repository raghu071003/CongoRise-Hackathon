import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth state on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle menu on mobile view (below 640px)
  const toggleMenu = () => {
    if (windowWidth <= 640) {
      setMenu(!menu);
    }
  };

  return (
    <div className='absolute top-0 left-0 w-full bg-transparent flex justify-around items-center p-4 md:p-8 z-50'>

      

      <div className='flex justify-between gap-10'>
        <div className={`md:flex sm:hidden gap-6 text-lg md:text-2xl justify-between md:justify-end items-center ${windowWidth > 640 ? '' : 'hidden'}`}>
          <NavLink
            to='/supplements'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Supplements
          </NavLink>
          <NavLink
            to='/packages'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Packages
          </NavLink>
          <NavLink
            to='/timings'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Timings
          </NavLink>
        </div>
        <div className=''>
          <div className='leading-[0] flex flex-col items-center cursor-pointer' onClick={() => navigate('/')}>
            <p className='text-4xl font-semibold tracking-widest text-white'>Panther</p>
            <p className='sub-font font-bold text-yellow-300 md:ml-2'>Fitness</p>
          </div>
        </div>
        <div className={`md:flex sm:hidden gap-6 text-lg md:text-2xl justify-between md:justify-end items-center ${windowWidth > 640 ? '' : 'hidden'}`}>
          <NavLink
            to='/gymGears'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Gym Gears
          </NavLink>
          <NavLink
            to='/offers'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Offers
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
          >
            Login
          </NavLink>
        </div>

      </div>
      <img
        src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
        className='w-10 cursor-pointer md:hidden'
        alt=""
        onClick={toggleMenu}
      />
      {/* Hidden Menu for Mobile */}
      <ul className={`md:hidden ${menu ? 'flex flex-col' : 'hidden'} absolute top-10 right-0 m-5 p-8 text-5xl gap-10 backdrop-blur-md`}>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/supplements'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200 `}
          >
            Supplements
          </NavLink>
        </li>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/packages'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
          >
            Packages
          </NavLink>
        </li>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/timings'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
          >
            Timings
          </NavLink>
        </li>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/gymGears'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
          >
            Gym Gears
          </NavLink>
        </li>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/offers'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
          >
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink
          onClick={(prev)=>setMenu(!prev)}
            to='/login'
            className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
