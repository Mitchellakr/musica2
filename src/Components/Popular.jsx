import React from 'react'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art3 from '../Assets/Images/musicArt/Art3.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'
import art6 from '../Assets/Images/musicArt/Art6.png'
import art7 from '../Assets/Images/musicArt/Art7.png'

const popularSongs = [
    {
        id: 1,
        img: art7,
        title: 'Blind',
        name: 'Wiz zee'
    },
    {
        id: 2,
        img: art4,
        title: "Everything's black",
        name: 'Ameed'
    },
    {
        id: 3,
        img: art1,
        title: 'Limit',
        name: 'John Dillion'
    },
    {
        id: 4,
        img: art6,
        title: 'Nomad',
        name: 'Makrol eli'
    },
    {
        id: 5,
        img: art3,
        title: 'Limit',
        name: 'John Dillion'
    },
    {
        id: 6,
        img: art2,
        title: 'Mountain',
        name: 'Krisx'
    },
    {
        id: 7,
        img: art5,
        title: 'Cancelled',
        name: 'Enimen'
    },
]

const Popular = () => {
    return (
        <div className='flex-grow mt-10 mb-[10em]'>
            <h2 className='text-white text-2xl font-semibold'>Popular in your area.</h2>
            <div className="flex gap-6 items-center w-full overflow-x-auto mt-5 bar">
                {
                    popularSongs.map((popularsong) => (
                        <div key={popularsong.id} className="cursor-pointer text-white min-w-fit">
                            <img src={popularsong.img} className='md:h-[200px] md:w-[200px]  rounded-3xl' alt="" />
                            <p className='pt-2'>{popularsong.title}</p>
                            <p className='opacity-40'>{popularsong.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Popular