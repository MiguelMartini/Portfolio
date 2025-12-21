import React from 'react'

const LinkBtn = ({ name, link} ) => {
  return (
    <div>
        <button className='cursor-pointer hover:opacity-90 transition hover:scale-98 inline-flex items-center justify-center
        min-w-40 h-14 p-4 bg-[#374B22] rounded-xl text-xl font-bold text-[#ede4de]
        lg:text-2xl lg:p-10 ease-in-out
        '><a href={link} target='blank'>{name}</a></button>
    </div>
  )
}

export default LinkBtn