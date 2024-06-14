import React from 'react'
import Aside from '../Components/Aside'
import Chartbottom from '../Components/Chartbottom'
import ChartTop from '../Components/ChartTop'
import Navbar from '../Components/Navbar'
import Player from '../Components/Player'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Charts = (props) => {

    const location = useLocation()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
        >
            <img src={location.state.chart.img} alt="" className='h-full w-full fixed opacity-10 z-[-1]' />
            <Navbar />
            <div className="w-full">
                <div className="container mx-auto mt-6 flex gap-[3em]">
                    <Aside />
                    <div className=' w-full gap-10'>
                        <ChartTop
                            name={location.state.chart.name}
                            img={location.state.chart.img}
                        />
                        <Chartbottom />
                    </div>
                </div>
            </div>
            <Player />
        </motion.div>
    )
}

export default Charts