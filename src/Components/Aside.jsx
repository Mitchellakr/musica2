import React from 'react'
import home from '../Assets/Icons/Home.svg'
import radio from '../Assets/Icons/radio.svg'
import playlist from '../Assets/Icons/playlist.svg'
import videos from '../Assets/Icons/videos.svg'
import profile from '../Assets/Icons/profile.svg'
import logout from '../Assets/Icons/Logout.svg'
import { Link } from 'react-router-dom'

const navlinks = [
  {
    id: 1,
    icon: home,
    path: '/Home'
  },
  {
    id: 2,
    icon: playlist,
    path: '/Collections'
  },
  {
    id: 3,
    icon: radio,
    path: '/Home'
  },
  {
    id: 4,
    icon: videos,
    path: '/Home'
  },
]


const Aside = () => {
  return (
    <div className='hidden sticky w-fit flex-none md:flex flex-col gap-4'>

      {/* first nav */}

      <div className="py-4 px-2 justify-center flex flex-col items-center gap-6 rounded-full bg-[#1A1E1F]">
        {
          navlinks.map((link) => (
            <Link key={link.id} to={link.path}><img src={link.icon} alt="" /></Link>
          ))
        }
      </div>

      {/* second nav */}

      <div className="py-4 px-2 justify-center flex flex-col items-center gap-6 rounded-full bg-[#1A1E1F]">
        <img src={profile} alt="" />
        <img src={logout} alt="" />
      </div>
    </div>
  )
}

export default Aside