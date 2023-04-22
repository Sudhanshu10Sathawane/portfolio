import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
const Navbr = () => {
  return (
    <div className='text-gray-400 mx-auto mx-w-[1240px] flex '>
        <h1 className='w-full p-4 text-2xl hover:text-[#00df9a] font-semibold border-b border-b-green-500'>Sudhanshu Sathawane</h1>
        <ul className='flex'>
            <li className='p-4'><a href="https://github.com/Sudhanshu10Sathawane" target="_blank">Github</a></li>
            <li className='p-4'><a href="https://www.linkedin.com/in/sudhanshu-sathawane/" target="_blank">Linkedin</a></li>
            <li className='p-4'><a href="https://leetcode.com/furious10/" target="_blank">Leetcode</a></li>
            <li className='p-4'><a href="https://codeforces.com/profile/furious10" target="_blank">Codeforces</a></li>
        </ul>
        {/* <div>
            <AiOutlineMenu size={60} className='p-4' />
        </div> */}
        {/* <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 justify-end'>
        <ul className='pt-24 uppercase'>
            <li className='p-4' >Github</li>
            <li className='p-4'>Linkedin</li>
            <li className='p-4'>Leetcode</li>
            <li className='p-4'>Codeforces</li>
        </ul>
        </div> */}
    </div>
  )
}

export default Navbr