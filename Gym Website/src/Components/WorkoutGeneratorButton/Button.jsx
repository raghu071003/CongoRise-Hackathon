import React from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateWorkoutPlanButton = () => {
    const navigate = useNavigate()
  return (
    <button
      onClick={()=>b=navigate('/workoutPlan')}
      className="bg-black border-4 text-white px-6 py-3 rounded-md shadow hover:bg-yellow-400 transition duration-200 z-50"
    >
      Generate Workout Plan
    </button>
  );
};

export default GenerateWorkoutPlanButton;
