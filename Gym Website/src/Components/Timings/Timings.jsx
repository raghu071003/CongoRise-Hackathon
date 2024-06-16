import React from 'react'
import { timings } from '../../assets/data'
import TimingCard from './TimingCard'

const Timings = () => {
    return (
        <div className='time-bg flex flex-col h-fit w-full'>
            <div className='overlay h-screen w-full'></div>

            <div className='mt-36  z-10 '>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='tracking-widest text-5xl text-[#e3e3e3] text-center border-b-4 border-b-yellow-400 w-fit'>Timings</h1>
                    <div className='cards grid gap-4 grid-cols-3 m-10 '>
                        {timings.map((item, i) => {
                            return <TimingCard key={item.id} timing={item.time} slotsAvailable={item.slots} />
                        })}
                    </div>
                    <h1 className='text-white text-4xl text-center m-8 mb-36'>The Gym will be open on the <span className='text-yellow-400'>Sundays</span>  as well.</h1>
                </div>


            </div>

        </div>
    )
}

export default Timings
