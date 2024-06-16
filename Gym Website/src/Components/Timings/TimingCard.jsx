import React from 'react'

const TimingCard = ({timing,slotsAvailable}) => {
  return (
    <div className=' flex flex-col border border-white backdrop-blur-sm p-4 rounded-sm box-border justify-center items-center'>
      <div className='text-5xl text-white p-4'>{timing}</div>

      <div className='text-white text-center p-2'>Slots Available: {slotsAvailable}</div>
    </div>
  )
}

export default TimingCard
