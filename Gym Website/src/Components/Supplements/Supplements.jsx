import React from 'react';
import { supplements } from '../../assets/data';
import SupplementCard from './SupplementCard';


const Supplements = () => {
  return (
    <div className='time-bg flex flex-col h-fit w-full fade-in'>
            <div className='overlay h-screen w-full'></div>

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

        </div>
  );
};

export default Supplements;
