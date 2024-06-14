import React from 'react'
import shuffle from '../Assets/Icons/shuffle.svg'
import previous from '../Assets/Icons/previous.svg'
import play from '../Assets/Icons/Play.svg'
import pause from '../Assets/Icons/pause.svg'
import next from '../Assets/Icons/next.svg'
import volume from '../Assets/Icons/volume.svg'
import repeat from '../Assets/Icons/repeat.svg'
import Art8 from '../Assets/Images/musicArt/Art8.png'

const Player = () => {

    const [playcontrol, setPlaycontrol] = React.useState(true)
    const handlePlay = () => setPlaycontrol(!playcontrol)
    return (
        <div className="fixed px-4 z-[50] left-0 bottom-0 w-full py-6 backdrop-blur-sm">
            <div className="container mx-auto flex gap-4 justify-between items-center  ">
                <div className="flex justify-center items-center gap-4 w-fit">
                    <img src={Art8} alt="current music" className='h-[50px] w-[50px] rounded-xl' />
                    <div className="flex flex-col items-start justify-center w-fit">
                        <p className="text-white w-full">Seasons in</p>
                        <label className="text-[#B3B3B3] w-full">James</label>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center items-center w-[70%]">

                    {/* control buttons */}

                    <div className="ml-auto sm:ml-0 flex items-center gap-6 sm:gap-[3em] w-fit">
                        <button className='hidden sm:flex'><img src={shuffle} alt="shuffle" /></button>
                        <button className='hidden sm:flex'><img src={previous} alt="previous" /></button>
                        <button onClick={handlePlay} className="rounded-full p-4 bg-yellow-300">{playcontrol ? <img src={play} alt="play" /> : <img src={pause} alt="pause" />}</button>
                        <button><img src={next} alt="next" />   </button>
                        <button className='hidden sm:flex'><img src={repeat} alt="repeat" /> </button>
                    </div>

                    {/* seeker slider */}

                    <div className="hidden sm:flex gap-4 items-center w-full">
                        <input type="range" className="w-full h-[3px]" />
                    </div>
                </div>

                {/* volume slider */}

                <div className="hidden sm:flex gap-4 items-center justify-center w-[15%]">
                    <button> <img src={volume} alt="volume" /> </button>
                    <input type="range" className="w-full h-[3px]" />
                </div>
            </div>
        </div >
    )
}

export default Player