import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className='home-bg relative top-0 left-0 h-screen w-full'>
      <div>
        <div className='absolute z-10 top-0 left-0 flex items-center justify-around flex-wrap h-screen w-full'>
          <div className=''>
            <div className=''>
              <h1 className='text-white  text-8xl'>Welcome,</h1>
              <p className='text-yellow-400 sub-font font-lg  '>Start Your Fitness Journey with <b>Panther Gym</b> .</p>
              {/* {isAuthenticated ? <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' onClick={()=>navigate('/checkMembership')} > Timings</button>
                :
                <button className=" px-4 my-10 text-2xl border-2 text-white hover:shadow-md rounded-xl hover:bg-white hover:text-black hover:shadow-white" onClick={() => navigate('/register')}>Register</button>
              } */}

            </div>

          </div>
          <div className=''>
            <div className='flex flex-col'>
              <p className='text-white text-3xl'> A year from now you may wish you had started today.</p>
              <p className='sub-font text-[#e3e3e3] text-end text-xl'>-Karen Lamb</p>
            </div>


          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
