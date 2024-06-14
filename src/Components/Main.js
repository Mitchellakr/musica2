import Home from "./Home";
import Preview from "./Preview";
import Library from "./Library";
import Sidebar from "./Sidebar";
import { useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Fullplayer from "./Fullplayer";



export default function Main({mainPage, setMainPage, allSongs, setAllSongs, setKeyWord, keyWord, currentPlayList, 
  streaming,setStreaming, setCurrentPlaylist, audioRef, songIndex, setSongIndex,
  audioVolume, setAudioVolume,audioDuration,setAudioDuration,audioTime,setAudioTime,loop,setLoop,shuffle,setShuffle,
  setPlayPause, playPause, collections, setCollections, updateLike, musicData, setMusicData}) {


const navigate = useNavigate();
const collectionCategory = useRef('Top');

function Redirect(){
  
  useEffect(()=>{
    navigate('/home');
  },[])
}

    return (
        <div className="main-content">
          
          <Sidebar setMainPage={setMainPage} mainPage={mainPage}/>

          <Routes>
            <Route path='' element={<Redirect />} />
          <Route exact path="/home" element={<Home keyword={keyWord} setSongIndex={setSongIndex} songIndex={songIndex}
             setCurrentPlaylist={setCurrentPlaylist} setPlayPause={setPlayPause} playPause={playPause} streaming={streaming}
              setStreaming={setStreaming} collections={collections} allSongs={allSongs} audioRef={audioRef}  updateLike={updateLike} setCollections={setCollections} 
              setKeyWord={setKeyWord} collectionCategory={collectionCategory}/>} />
          
          <Route exact path="/collections" element={<Library collections={collections} allSongs={allSongs}  updateLike={updateLike} setCurrentPlaylist={setCurrentPlaylist}  setSongIndex={setSongIndex}
           songIndex={songIndex} setPlayPause={setPlayPause} playPause={playPause} currentPlayList={currentPlayList} audioRef={audioRef}  streaming={streaming} setStreaming={setStreaming}  
           collectionCategory={collectionCategory}/>}/>

          <Route exact path="/home/top-charts" element={<Preview collectionCategory={collectionCategory} collections={collections} setCollections={setCollections}
          currentPlayList={currentPlayList} streaming={streaming} setStreaming={setStreaming} allSongs={allSongs} setAllSongs={setAllSongs} updateLike={updateLike}
          setCurrentPlaylist={setCurrentPlaylist} audioRef={audioRef} setSongIndex={setSongIndex} songIndex={songIndex} setPlayPause={setPlayPause} playPause={playPause}/>}/>

          <Route exact path='/home/player' element={<Fullplayer musicData={musicData} setMusicData={setMusicData} currentPlayList={currentPlayList} setCurrentPlaylist={setCurrentPlaylist}
         setPlayPause={setPlayPause} playPause={playPause} audioRef={audioRef}   audioVolume={audioVolume} setAudioVolume={setAudioVolume}
         audioDuration={audioDuration} setAudioDuration={setAudioDuration} audioTime={audioTime} setAudioTime={setAudioTime} loop={loop} setLoop={setLoop} 
         shuffle={shuffle} setShuffle={setShuffle} songIndex={songIndex} setSongIndex={setSongIndex} streaming={streaming} setStreaming={setStreaming}/>}/>
          </Routes>

        </div>

        
      );
  }
  

  