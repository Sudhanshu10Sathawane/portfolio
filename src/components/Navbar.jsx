import React from 'react';
const Navbar = () => {
  return (
    <div className='text-gray-400 mx-auto mx-w-[1240px] flex '>
        <h1 className='w-full p-4 text-4xl hover:text-[#00df9a] font-bold font-signature border-b border-b-green-500 '>Sudhanshu Sathawane</h1>
        <ul className='flex'>
            <li className='p-4 border-b border-orange-500 hover:scale-150 duration-200'><a href="https://github.com/Sudhanshu10Sathawane" target="_blank" rel="noreferrer">Github</a></li>
            <li className='p-4 border-b border-orange-500 hover:scale-150 duration-200'><a href="https://www.linkedin.com/in/sudhanshu-sathawane/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li className='p-4 border-b border-orange-500 hover:scale-150 duration-200'><a href="https://leetcode.com/furious10/" target="_blank" rel="noreferrer">Leetcode</a></li>
            <li className='p-4 border-b border-orange-500 hover:scale-150 duration-200'><a href="https://codeforces.com/profile/furious10" target="_blank" rel="noreferrer">Codeforces</a></li>
        </ul>
    </div>
  );
}

export default Navbar