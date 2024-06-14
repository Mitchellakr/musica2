import React from 'react'
import art1 from '../Assets/Images/musicArt/Art1.png'
import art2 from '../Assets/Images/musicArt/Art2.png'
import art3 from '../Assets/Images/musicArt/Art3.png'
import art4 from '../Assets/Images/musicArt/Art4.png'
import art5 from '../Assets/Images/musicArt/Art5.png'
import heart from '../Assets/Icons/Heart.svg'
import more from '../Assets/Icons/more-vertical.svg'

const songs = [
    {
        id: 1,
        img: art1,
        title: 'let me love you',
        artist: 'Krisx',
        soa: 'Single',
        timelapse: '4:17',
    },
    {
        id: 2,
        img: art2,
        title: 'Watin man go do',
        artist: 'Burna',
        soa: 'African giant',
        timelapse: '2:30',
    },
    {
        id: 3,
        img: art3,
        title: 'Stand strong',
        artist: 'Davido',
        soa: 'Single',
        timelapse: '2:02',
    },
    {
        id: 4,
        img: art4,
        title: 'Closa',
        artist: 'Ybee',
        soa: 'Obi datti',
        timelapse: '3:23',
    },
    {
        id: 5,
        img: art5,
        title: 'Under the influence',
        artist: 'Chris brown',
        soa: 'Indigo',
        timelapse: '2:42',
    },
]
const Chartbottom = () => {
    return (
        <>

            {/* Desktop view */}

            <div className='hidden md:block py-10 z-[1] relative pb-[8em]'>
                {songs.map((song) => (
                    <div key={song.id} className='grid grid-cols-5 items-center justify-between p-3 mb-4 rounded-lg bg-[#25292a] text-white'>
                        <div className='flex items-center gap-3'>
                            <img src={song.img} className='h-[50px] w-[50px] rounded-xl' alt="" />
                            <button><img src={heart} alt="" /></button>
                        </div>
                        <p className='opacity-60'>{song.title} ~ {song.artist}</p>
                        <p className='justify-self-center opacity-60'>{song.soa}</p>
                        <p className='justify-self-end opacity-60'>{song.timelapse}</p>
                        <button className='justify-self-end'><img src={more} alt="" /></button>
                    </div>
                ))}
            </div>

            {/* mobile view */}

            <div className='block md:hidden py-10 z-[1] relative pb-[8em] px-6'>
                {songs.map((song) => (
                    <div key={song.id} className='flex items-center justify-between p-3 mb-4 rounded-lg bg-[#25292a] text-white'>
                        <div className='flex items-center gap-3'>
                            <img src={song.img} className='h-[50px] w-[50px] rounded-xl' alt="" />
                            <div>
                                <p className='py-[1px] opacity-60'>{song.title} ~ {song.artist}</p>
                                <p className='py-[1px] opacity-60'>{song.soa}</p>
                            </div>
                        </div>
                        <div>
                            <button className='justify-self-end'><img src={more} alt="" /></button>
                            <p className='justify-self-end opacity-60'>{song.timelapse}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Chartbottom