import React from 'react'

function DevIcon({link, alt}) {
  return (
    <div className='flex justify-center'>
        <div className='shadow-lg bg-[#EDECED] p-2 rounded-xl'>
            <img src={link} alt={alt} className="w-10 h-10"/>
        </div>
    </div>
  )
}

export default DevIcon