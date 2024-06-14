import React from 'react'
import play from '../Assets/Icons/Play.svg'
import addcollection from '../Assets/Icons/music-square-add.svg'
import heartred from '../Assets/Icons/Heartred.svg'


const ChartTop = ({ name, img }) => {
    return (
        <div className='px-6 block md:flex items-end gap-6 lg:w-[70%] w-full'>
            <img className='z-[3] rounded-3xl h-full relative mb-6 md:mb-0 w-full md:w-[500px]' src={img} alt="" />
            <div>
                <h2 className="text-3xl font-semibold text-white opacity-90">{name}</h2>
                <p className='text-white opacity-80 py-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe natus unde accusantium nihil consectetur dicta numquam, recusandae ipsum alias. Dolorem!</p>
                <p className='text-white opacity-80 pb-8 text-sm'>64 songs ~ 16 hrs+</p>
                <div className="text-white text-sm relative z-[10] flex gap-2 items-center">
                    <button className='flex gap-2 items-center rounded-full py-2 px-4 bg-gray-600'>
                        <div className="rounded-full p-1 bg-yellow-300"><img src={play} alt="play" /> </div>
                        <p>play all</p>
                    </button>
                    <button className='flex items-center gap-2 rounded-full py-2 px-4 bg-gray-600'>
                        <img src={addcollection} alt="" />
                        <p>Add to collection</p>
                    </button>
                    <button className='rounded-full p-[10px] bg-gray-600'>
                        <img src={heartred} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChartTop