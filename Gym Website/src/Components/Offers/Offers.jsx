import React from 'react'
import { OffersData } from '../../assets/data'
import OfferCard from './OfferCard'
import JoinNow from '../JoinNow/JoinNow'
import Loading from '../Loading/Loading'
import { useState } from 'react'
import GenerateWorkoutPlanButton from '../WorkoutGeneratorButton/Button'

const Offers = () => {
    const [loading,setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false)
    },1000)
  return (
    <>
    {loading ? <Loading toggle={loading} /> :
    <div>
      <div className='offer-bg flex flex-col items-center fade-in'>
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
      <div className='fixed bottom-0 right-0 flex items-center justify-center m-8 z-50'>
          <GenerateWorkoutPlanButton />
      </div>
    </div>
}
    </>
  )
}

export default Offers
