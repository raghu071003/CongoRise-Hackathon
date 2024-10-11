import React, { useState } from 'react';
import axios from 'axios';

const GeminiWorkoutPlanGenerator = () => {
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [focusArea, setFocusArea] = useState('');
  const [availableEquipment, setAvailableEquipment] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [formVisible, setFormVisible] = useState(true); // New state to control form visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormVisible(false); // Hide the form when submitted

    try {
      const response = await axios.post('https://backend-panther-a7he.onrender.comgenerate-workout', {
        goal,
        experience,
        focusArea,
        availableEquipment,
      });

      setPlan(response.data.plan);
    } catch (error) {
      console.error('Error generating workout plan:', error);
      setFormVisible(true); // Show the form again if there's an error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gemini-workout-generator p-8 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-black rounded-lg shadow-md p-6 mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-6">AI-Generated Workout Plan</h2>

        {formVisible && ( // Conditional rendering of the form
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 border p-8 rounded-xl">
            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">Fitness Goal:</label>
              <select
                className="outline-none border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                required
              >
                <option value="">Select Goal</option>
                <option value="weight loss">Weight Loss</option>
                <option value="muscle gain">Muscle Gain</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">Experience Level:</label>
              <select
                className="outline-none border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">Focus Area:</label>
              <select
                className="outline-none border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-200"
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                required
              >
                <option value="">Select Focus Area</option>
                <option value="full body">Full Body</option>
                <option value="upper body">Upper Body</option>
                <option value="lower body">Lower Body</option>
                <option value="core">Core</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-300 mb-2">Available Equipment:</label>
              <input
                type="text"
                className="outline-none border border-gray-600 rounded-md p-2 w-full bg-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-200"
                placeholder="e.g., Dumbbells, Barbell, None"
                value={availableEquipment}
                onChange={(e) => setAvailableEquipment(e.target.value)}
                required
              />
            </div>

            <button className="bg-yellow-400 text-white p-3 rounded-md shadow hover:bg-black transition duration-200 border-2 " type="submit">
              Generate Workout Plan
            </button>
          </form>
        )}

        {loading && (
          <p className="text-center mt-4 text-gray-500 animate-pulse">
            Generating plan...
          </p>
        )}

        {plan && (
          <div className="mt-6 bg-gray-700 p-6 rounded-md shadow-md max-w-3xl"> {/* Increased width for generated text */}
            <h3 className="text-xl font-semibold text-white">Your AI-Generated Workout Plan:</h3>
            <pre className="whitespace-pre-wrap text-gray-300">{plan}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiWorkoutPlanGenerator;
