import React, { useEffect } from 'react';

const Loading = ({ toggle }) => {
  useEffect(() => {
    const loadingElement = document.getElementById('loading');
    if (toggle) {
      loadingElement.classList.remove('hidden');
      loadingElement.classList.add('flex', 'fade-in-out');
    } else {
      loadingElement.classList.remove('flex', 'fade-in-out');
      loadingElement.classList.add('fade-out');
      setTimeout(() => {
        loadingElement.classList.add('hidden');
      }, 500);
    }
  }, [toggle]);

  return (
    <div
      className='absolute top-0 left-0 h-screen w-full justify-center items-center z-20 bg-black hidden'
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
