import React from 'react'
import user1 from '../Assets/Images/users/user1.png'
import user2 from '../Assets/Images/users/user2.png'
import user3 from '../Assets/Images/users/user3.png'
import user4 from '../Assets/Images/users/user4.png'
import user5 from '../Assets/Images/users/user5.png'
import heart from '../Assets/Icons/Heart.svg'

const Hero = () => {
  return (
    <div className='bg-[#609EAF] rounded-[2.5em] p-10 relative w-full md:w-[60%] h-[420px] mb-8 text-white bg-none md:bg-heroImage bg-no-repeat bg-cover '>
      <div className="h-full w-full lg:w-[50%] flex flex-col justify-between ">
        <p>Currated playlist</p>

        {/* heading */}
        <div className='mt-auto pb-8 md:mt-0 md:pb-0'>
          <h2 className='text-3xl font-semibold'>R &amp; B Hits</h2>
          <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
        </div>

        {/* users  */}
        <div className='flex items-center gap-2'>
          <div className="flex">
            <img src={user1} alt="" />
            <img src={user2} alt="" className='ml-[-15px]' />
            <img src={user3} alt="" className='ml-[-15px]' />
            <img src={user4} alt="" className='ml-[-15px]' />
            <img src={user5} alt="" className='ml-[-15px]' />
          </div>
          <img src={heart} alt="" />
          <p>33K Likes</p>
        </div>
      </div>
    </div>
  )
}

export default Hero