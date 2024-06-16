import React from 'react'


const SupplementCard = ({img,name,link,description}) => {
    const handleClick = ()=>{
      window.open(link,'_blank')
    }
    return (
      <div>
        <div style={{'--image-url': `url(${img})`}}  className=' m-2 cursor-pointer hover:scale-125 hover:rounded-sm duration-300 bg-[image:var(--image-url)] flex flex-col border-2 border-white backdrop-blur-sm p-0 box-border justify-center items-center w-36 h-48 bg-cover bg-center bg-no-repeat shadow-lg shadow-gray-300' onClick={handleClick}>
          <div className=' absolute top-0 left-0 flex justify-center items-center w-36 h-48 backdrop-brightness-50  '>
               <div className='text-xl text-center text-white p-4'>{name}</div>
          </div>
        
      </div>
      </div>
    )
  }

export default SupplementCard
