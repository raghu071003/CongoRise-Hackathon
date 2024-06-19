import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const PackageCard = ({ type, Description, Features, Price }) => {
  const { isAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <div className='flex flex-col p-3 border-2 text-white rounded-xl w-[350px] h-[400px] backdrop-blur-lg shadow-md shadow-white tracking-wider'>
        <h1 className='text-3xl font-semibold text-center m-1 mt-1 border-b-2 border-b-yellow-400'>{type}</h1>
        <p className='text-lg text-center m-2'>{Description}</p>
        <p className='text-lg text-start mt-2 underline'>Features:</p>
        <ul className='text-md text-center list-disc px-5'>
          {Features.map((item, i) => {
            return <li className='text-start text-md' key={i}>{item}</li>
          })}
        </ul>
        <h3 className='text-center text-2xl '>Price: <span className='text-yellow-400'>{Price}</span></h3>
        <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' onClick={() => isAuthenticated ? navigate('/payment') : navigate('/register')}>Get Membership</button>
      </div>
    </div>
  )
}

export default PackageCard
