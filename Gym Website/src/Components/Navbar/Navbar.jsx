import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {isAuthenticated,logout} = useContext(AuthContext)
  const [profileopt,setProfileopt] = useState(false)
  const {loading,setLoading} = useContext(AuthContext)
 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (windowWidth <= 640) {
      setMenu(!menu);
    }
  };
  const toggleProfileOpt = () => (setProfileopt(prev => !prev));
  const handleLogout =()=>{
  setLoading(true);
  logout();
  setLoading(false)
 }
  

return (
  <div className='absolute top-0 left-0 w-full bg-transparent flex justify-around items-center p-4 md:p-8 z-50 fade-in'>
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
        {!isAuthenticated ? <NavLink
          to='/login'
          className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
        >
          Login
        </NavLink> : <button
          // onClick={logout}
          className='text-[#e3e3e3]  hover:border-yellow-200'
        >
          <div className='flex items-center gap-2' onClick={toggleProfileOpt}>
          <img src="https://www.citypng.com/public/uploads/small/11639594342hjraqgbufi3xlb66lt30fz1pwfcydxkjqbynfqdpvufz41ysjtngiet4dyrywgqqqqu56w5nozgrhyecs4ixrlllkl150ogbiid1.png" width={40} alt="" />
          <img src="https://th.bing.com/th/id/R.3b9af8535d4e7845c8ea482528b2aca9?rik=A9tWdYv9ubUwlw&riu=http%3a%2f%2fdmconsulting.net%2fwp-content%2fuploads%2f2017%2f09%2fDrop-down-arrow-icon-rounded.png&ehk=qtJ7gpnDEcf7ZqT0JfV1l4naJzSy15CMVb7r6SpAkX0%3d&risl=&pid=ImgRaw&r=0" alt="" className={` ${profileopt ?  'drop-opt' : ''}w-6 h-6`}  />
          </div>
          
          <ul className={`${profileopt ? 'flex flex-col' : 'hidden'} absolute gap-3 my-3` }>
            <NavLink className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`} to='/profile'>Profile</NavLink>
            <NavLink className={({ isActive }) => ` text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`} onClick={handleLogout}>logout</NavLink>
          </ul>
        </button>}

      </div>

    </div>
    <img
      src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
      className='w-10 cursor-pointer md:hidden'
      alt=""
      onClick={toggleMenu}
    />
    {/* Hidden Menu for Mobile */}
    <ul className={`md:hidden ${menu ? 'flex flex-col' : 'hidden'} absolute top-10 right-0 m-5 p-8 text-5xl gap-10 border bg-black rounded-xl `}>
      <li>
        <NavLink
          onClick={(prev) => setMenu(!prev)}
          to='/supplements'
          className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200 `}
        >
          Supplements
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={(prev) => setMenu(!prev)}
          to='/packages'
          className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
        >
          Packages
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={(prev) => setMenu(!prev)}
          to='/timings'
          className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
        >
          Timings
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={(prev) => setMenu(!prev)}
          to='/gymGears'
          className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
        >
          Gym Gears
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={(prev) => setMenu(!prev)}
          to='/offers'
          className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-500'} border-b border-yellow-200`}
        >
          Offers
        </NavLink>
      </li>
      <li>
      {!isAuthenticated ? <NavLink
          to='/login'
          className={({ isActive }) => `${isActive ? 'border-b-4 border-yellow-400' : ''} text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200`}
        >
          Login
        </NavLink> : <button
          onClick={handleLogout}
          className='text-[#e3e3e3] hover:border-b-2 hover:border-yellow-200'
        >
          Logout
        </button>}
      </li>
    </ul>
  </div>
);
}

export default Navbar;
