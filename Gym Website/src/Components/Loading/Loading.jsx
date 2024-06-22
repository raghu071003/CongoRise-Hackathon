import React, { useEffect } from 'react';

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
      className='h-screen w-full justify-center items-center fade-in-out z-50 bg-black'
      id='loading'
    >
      <div className='h-44 w-44'>
        <img
          src='https://res.cloudinary.com/dwcuayp2u/image/upload/v1718891440/Loading_ltzmxg.png'
          alt='Loading'
          className='loading-bg'
        />
      </div>
    </div>
  );
};

export default Loading;
