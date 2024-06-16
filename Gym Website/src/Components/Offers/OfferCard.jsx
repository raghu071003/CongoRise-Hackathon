import React from 'react'

const OfferCard = ({offer,price,description,code}) => {
  return (
    <div className='flex flex-col z-10 items-center justify-center border rounded-xl p-4 w-[350px] h-[300px] backdrop-blur-sm'>
      <h1 className='text-4xl text-white m-4 text-center '>{offer}</h1>
      <p className='text-lg text-center m-2 text-white'>{description}</p>
      <h3 className='text-xl text-white text-center'>Applicable Price : <span className='text-yellow-400'>{price}</span></h3>
      <h3 className='text-xl text-white text-center'>PROMO CODE : <span className='text-yellow-400'>{code}</span></h3>
    </div>
  )
}

export default OfferCard
