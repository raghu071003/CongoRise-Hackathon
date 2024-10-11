import axios from 'axios';
import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage'; // Import the ErrorMessage component

const Register = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    if (!Name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (mobile.length !== 10) {
      setError('Mobile number must be 10 digits');
      return false;
    }
    setError(''); // Clear error if all fields are valid
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const formData = {
      name: Name,
      email: email,
      password: password,
      mobile: mobile,
    };

    try {
      const response = await axios.post('http://localhost:4080/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('Successfully Registered, Please Login!');
        setName(''); // Clear form
        setEmail('');
        setPassword('');
        setMobile('');
        navigate('/login');
      } else if (response.status === 401) {
        alert('User Exists, Please Login!');
      }
    } catch (e) {
      console.error(e);
      setError('An error occurred while registering');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      {loading ? <Loading toggle={loading} /> :
      <div>
        <div className='overlay z-0'></div>
        <div className='regbg w-full min-h-screen flex items-center justify-center z-10 flex-wrap fade-in '>
          <div className='overlay'></div>
          <div className='mt-34 flex flex-col md:flex-row justify-around items-center max-w-screen-lg backdrop-blur-md rounded-xl shadow-xl border'>
            <div className='flex flex-col justify-center items-center h-[550px]'>
              <h1 className='text-white text-4xl text-center mb-2'>Panther <span className='text-yellow-400'>GYM</span></h1>
              
              <form action="" className={`flex flex-col items-center justify-center gap-3 w-96`} onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={Name} className='outline-none bg-transparent text-2xl p-4 border-b-2 text-white' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email' value={email} className='outline-none bg-transparent text-2xl p-4 border-b-2 text-white' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} className='outline-none bg-transparent text-2xl p-4 border-b-2 text-white' onChange={(e) => setPassword(e.target.value)} />
                <input type="number" placeholder='Mobile' value={mobile} className='outline-none bg-transparent text-2xl p-4 border-b-2 text-white' maxLength={10} onChange={(e) => setMobile(e.target.value.slice(0, 10))} />
                
                {error ? <ErrorMessage error={error} />: ""}
                
                <p className='text-white text-xl m-4'>Already have an account? <span className='text-yellow-400 cursor-pointer' onClick={() => navigate('/login')}>Login</span></p>
                <button className='text-white border-2 border-yellow-400 p-3 rounded-xl mt-4 hover:bg-white hover:text-black' type='submit'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default Register;
