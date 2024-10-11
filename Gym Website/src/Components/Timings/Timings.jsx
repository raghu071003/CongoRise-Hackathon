import React, { useEffect, useState } from 'react'
import TimingCard from './TimingCard'
import axios from 'axios'
import Loading from '../Loading/Loading';
import GenerateWorkoutPlanButton from '../WorkoutGeneratorButton/Button';

const Timings = () => {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect triggered");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://backend-panther-a7he.onrender.com/timings');
        console.log(response);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {loading ? <Loading toggle={loading} /> :
        <div className='time-bg flex flex-col fade-in'>
          <div className='overlay h-screen w-full'></div>
          <div className='mt-36 z-10 '>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='tracking-widest text-5xl text-[#e3e3e3] text-center border-b-4 border-b-yellow-400 w-fit'>Timings</h1>
              <div className='cards grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-10'>
                {data && data.length > 0 ? (
                  data.map((item, i) => (
                    <TimingCard key={item.id} timing={item.time} slotsAvailable={item.slots} available={item.available} />
                  ))
                ) : (
                  <div>No data available</div>
                )}

              </div>

              <h1 className='text-white text-4xl text-center mb-8'>The Gym will be open on the <span className='text-yellow-400'>Sundays</span>  as well.</h1>
            </div>
          </div>
          <div className='fixed bottom-0 right-0 flex items-center justify-center m-8 z-50'>
            <GenerateWorkoutPlanButton />
          </div>
        </div>
      }
    </>
  )
}

export default Timings;
