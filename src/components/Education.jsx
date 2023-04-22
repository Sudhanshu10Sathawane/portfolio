import React from 'react';
import { Dot } from 'react-animated-dots';
import Typed from 'react-typed';
const Education = () => {
  return (
    <div className='text-gray-400'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center'>
        <h1 className='hover:text-[#00df9a] font-bold text-7xl'>EDUCATION</h1>
        <div className='font-bold'>
        <p>Studied from <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot></p>
        <Typed className='' strings={['Shri Sant Gajanan Maharaj College of Engineering','IIT Ropar']} typeSpeed={40}
                    backSpeed={50} loop />
        </div>
      </div>
    </div>
  );
}

export default Education