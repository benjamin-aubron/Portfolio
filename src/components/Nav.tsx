import React from 'react'

export default function Nav() {
  return (
    <div className='max-w-screen-xl mx-auto flex items-center justify-between text-white bg-black border-b-[1px] border-[#1E2029] py-6 px-4'>
      <div className='text-2xl font-semibold'>
        <span className='text-[#8F9094]'>&#123; </span>
        <span>Benjamin</span>
        <span className='text-[#8F9094]'> &#125;</span>
      </div>
      <div className='flex items-center gap-4'>
        <div>Projets</div>
        <div>Compétences</div>
        <div>Stack favorite</div>
        <div>Chronologie</div>
        <div>A propos</div>
      </div>
    </div>
  )
}
