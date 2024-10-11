import React, { useState } from 'react';
import { supplements } from '../../assets/data';
import SupplementCard from './SupplementCard';
import Loading from '../Loading/Loading';
import GenerateWorkoutPlanButton from '../WorkoutGeneratorButton/Button';


const Supplements = () => {
    const [loading,setLoading] = useState(true);
    setTimeout(()=>{
        setLoading(false)
    },1000)
  return (
    <>
    {loading ? <Loading toggle={loading}/> :
    <div className='time-bg flex flex-col h-fit w-full fade-in'>
            <div className='overlay'></div>

            <div className='mt-36  z-10 '>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='tracking-widest text-5xl text-[#e3e3e3] text-center border-b-4 border-b-yellow-400 w-fit'>Supplements & Nutrition</h1>
                    <div className='cards grid gap-4 grid-cols-3 m-10 mb-80 '>
                        {supplements.map((item, i) => {
                            return <SupplementCard key={item.id} name={item.name} description={item.description} link={item.link} img={item.image} />
                        })}
                    </div>
                </div>


            </div>
            <div className='fixed bottom-0 right-0 flex items-center justify-center m-8 z-50'>
          <GenerateWorkoutPlanButton />
      </div>

        </div>
    }
    </>
    
  );
};

export default Supplements;
