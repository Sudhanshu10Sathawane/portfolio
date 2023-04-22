import React from 'react';
const Navbar = () => {
  return (
    <div className='text-gray-400 mx-auto mx-w-[1240px] flex '>
        <h1 className='w-full p-4 text-2xl hover:text-[#00df9a] font-semibold border-b border-b-green-500'>Sudhanshu Sathawane</h1>
        <ul className='flex'>
            <li className='p-4 border-b border-orange-500 hover:animate-bounce'><a href="https://github.com/Sudhanshu10Sathawane" target="_blank">Github</a></li>
            <li className='p-4 border-b border-orange-500 hover:animate-bounce'><a href="https://www.linkedin.com/in/sudhanshu-sathawane/" target="_blank">Linkedin</a></li>
            <li className='p-4 border-b border-orange-500 hover:animate-bounce'><a href="https://leetcode.com/furious10/" target="_blank">Leetcode</a></li>
            <li className='p-4 border-b border-orange-500 hover:animate-bounce'><a href="https://codeforces.com/profile/furious10" target="_blank">Codeforces</a></li>
        </ul>
    </div>
  );
}

export default Navbar