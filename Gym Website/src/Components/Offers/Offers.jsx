import React from 'react'
import { OffersData } from '../../assets/data'
import OfferCard from './OfferCard'
import JoinNow from '../JoinNow/JoinNow'

const Offers = () => {
  return (
    <div>
      <div className='offer-bg flex flex-col items-center'>
        <div className='overlay'></div>
        <h1 className='text-white z-10 border-b-2 text-5xl mt-36'>OUR <span className='text-yellow-400'>OFFERS</span></h1>
          <div className='flex flex-1  flex-wrap justify-center mt-20 gap-5'>
            {OffersData.map((item,i)=>{
              return <OfferCard key={i} offer={item.offer} price={item.price} description={item.description} code={item.code} />
            })}
            
          </div>
          <h1 className='text-white z-10 text-center text-4xl p-8 mt-40 mb-40'>Use the Promocode at the payment page to avial the offers. T&C Apply</h1>
      </div>
      <JoinNow />
    </div>
  )
}

export default Offers
