import React from 'react'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art3 from '../Assets/Images/musicArt/Art3.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'
import art6 from '../Assets/Images/musicArt/Art6.png'
import art7 from '../Assets/Images/musicArt/Art7.png'

const newReleases = [
    {
        id: 1,
        img: art1,
        title: 'Life in a bubble',
        name: 'The van'
    },
    {
        id: 2,
        img: art2,
        title: 'Mountain',
        name: 'Krisx'
    },
    {
        id: 3,
        img: art3,
        title: 'Limit',
        name: 'John Dillion'
    },
    {
        id: 4,
        img: art4,
        title: "Everything's black",
        name: 'Ameed'
    },
    {
        id: 5,
        img: art5,
        title: 'Cancelled',
        name: 'Enimen'
    },
    {
        id: 6,
        img: art6,
        title: 'Nomad',
        name: 'Makrol eli'
    },
    {
        id: 7,
        img: art7,
        title: 'Blind',
        name: 'Wiz zee'
    },
]

const NewReleases = () => {
    return (
        <div className='flex-grow mt-10'>
            <h2 className='text-white text-2xl font-semibold'>New releases.</h2>
            <div className="flex gap-6 items-center w-full overflow-x-auto mt-5 scrollbar-hide bar">
                {
                    newReleases.map((release) => (
                        <div key={release.id} className="cursor-pointer text-white min-w-fit ">
                            <img src={release.img} className='md:h-[200px] md:w-[200px] rounded-3xl' alt="" />
                            <p className='pt-2'>{release.title}</p>
                            <p className='opacity-40'>{release.name}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default NewReleases