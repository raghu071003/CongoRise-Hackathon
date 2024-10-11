import React, { useEffect } from 'react';
import logo from '../../assets/LoadingLogo.png'

const Loading = ({ toggle }) => {
  useEffect(() => {
    const loadingElement = document.getElementById('loading');
    if (toggle) {
      loadingElement.classList.remove('hidden');
      loadingElement.classList.add('flex');
    } else {
      loadingElement.classList.remove('flex');
      loadingElement.classList.add('hidden');
      setTimeout(() => {
        loadingElement.classList.add('hidden');
      }, 500);
    }
  }, [toggle]);

  return (
    <div
      className='h-screen w-full justify-center items-center fade-in-out z-50 bg-black flex'
      id='loading'
    >
      <div className='h-24 w-24'>
        <img
          src={logo}
          alt='Loading'
          className='loading-bg'
        />
      </div>
    </div>
  );
};

export default Loading;
