import React from 'react'
import Aside from '../Components/Aside'
import Mycollections from '../Components/Mycollections'
import Navbar from '../Components/Navbar'
import Player from '../Components/Player'
import { motion } from 'framer-motion'

const Collections = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className='w-full'
        >
            <Navbar />
            <div className="w-full">
                <div className="container mx-auto mt-6 flex gap-[3em]">
                    <Aside />
                    <div className='w-full gap-10'>
                        <div className='w-full flex items-center gap-4 px-6'>
                            <button className='w-full py-2 sm:w-fit sm:px-6 rounded-full bg-[#FACD66]'>My collection</button>
                            <button className='w-full py-2 sm:w-fit sm:px-6 rounded-full border border-white border-solid opacity-20 text-white'>Likes</button>
                        </div>
                        <div>
                            <Mycollections />
                        </div>
                    </div>
                </div>
            </div>
            <Player />
        </motion.div>
    )
}

export default Collections