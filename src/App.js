<<<<<<< HEAD
import React from 'react';
import Home from './Routes/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import Collections from './Routes/Collections';
import Charts from './Routes/Charts';
import { AnimatePresence } from 'framer-motion'

export default function App() {
    const location = useLocation()
    return (
        <div className='w-full'>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Collections' element={<Collections />} />
                    <Route path='/Charts' element={<Charts />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}
=======
import Player from './components/Player';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.css';
import {useState, useEffect, useRef, useMemo} from 'react'
import songData from './components/SongData';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [musicData, setMusicData]= useState(
    {
      id:"",
      title:'',
      name:'',
      audio:'',
      thumbnail:''
    }
  );


//   useEffect(()=>{
//     navigate('/musica/home');
// },[])

  const [searchItems, setSearchItems]= useState(null);


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      let header = document.querySelector('header')
      let main = document.querySelector('.main-content').getBoundingClientRect().top

        if(main < -20){
          header.style.backgroundColor = '#1D2123';
        }
        else{
          header.style.backgroundColor = ''
        }
    }) 
   },[])




  const[currentPlayList, setCurrentPlaylist] = useState(songData.All);
  const [mainPage, setMainPage] = useState('Home');
  const[songIndex, setSongIndex] = useState(0);
  const[streaming, setStreaming] = useState(false);
  const[playPause, setPlayPause]= useState(false);
  const[allSongs, setAllSongs] = useState(songData.All)
  const[collections, setCollections] = useState(songData.Collections);

  const[audioVolume, setAudioVolume] = useState(1)
  const[audioDuration, setAudioDuration] = useState(null)
  const[audioTime, setAudioTime] = useState(null)
  const[loop, setLoop] = useState(false)
  const[shuffle, setShuffle] = useState(false)


   const audioRef = useRef('')
   const input = useRef('')

   useMemo(()=>{
    let arr = []
    let likeData = JSON.parse(sessionStorage.getItem("likes"))

  if(likeData){
  songData.All.forEach(song=>{
          if (likeData.indexOf(song.id) != -1) {
            arr.push({...song, like:true})
          } else {
            arr.push({...song, like:false})
          }
  })
  setAllSongs(arr)
}
     }
  ,[])

  useEffect(()=>{
    let arr=[]
    if(playPause){
      currentPlayList.forEach((item)=>{
        if(item.id === currentPlayList[songIndex].id){
          arr.push({...item,playing:true})
        }
        else{
          arr.push({...item,playing:false})
        }
      })
    }
  
    else{
      currentPlayList.forEach((item)=>{
          arr.push({...item,playing:false})
      })
    }
  
    setCurrentPlaylist(arr)
  }, [playPause,songIndex])

  function updateLike(){
    let arr = []
    let likeData = JSON.parse(sessionStorage.getItem("likes"))
  
  if(likeData){
  songData.All.forEach(song=>{
          if (likeData.indexOf(song.id) != -1) {
            arr.push({...song, like:true})
          } else {
            arr.push({...song, like:false})
          }
  })
  setAllSongs(arr)
  }



  let likedCollection = JSON.parse(sessionStorage.getItem("likedCollection")) || []
  let update = []
  if(likedCollection){
      collections.forEach(item => {
          if(likedCollection.indexOf(item.title) != -1){
              update.push({...item, like: true})
          }
          else{
              update.push({...item, like: false})
          }
      });
      setCollections(update);
  }
 }

 useEffect(()=>{
  if(streaming){
    console.log('change')
  }
  
 }, [streaming])

 
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a10da9f1a6mshe5ae1481d97e396p17e20ajsn68fb334d3f80',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

function getData(keyword){
  setSearchItems('loading')
  fetch(`https://spotify23.p.rapidapi.com/search/?q=${keyword}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
      .then(response => response.json())
      .then(response => {

        setSearchItems(response.tracks.items.slice(0,4).map(item=>{
          return {title: item.data.name,
            name: item.data.artists.items[0].profile.name,
            id: item.data.id,
          thumbnail:item.data.albumOfTrack.coverArt.sources[0].url}
        }))
      }
         
        )
}




  function getMusic(item, toggleFunc){
     setPlayPause(false)
   !streaming && setStreaming(true);
    fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${item.id}`, options)
	.then(response => response.json())
	.then(response => {
    if(!response.tracks[0].preview_url){
console.log('audio not available')
    }
    else{
      setMusicData({...item, audio: response.tracks[0].preview_url})
      toggleFunc(false)
       input.current.value = null
    }
  })
    
	.catch(err => console.error(err));
 
  setSearchItems(null);
}

useEffect(()=>{
if(musicData.audio != ''){
  audioRef.current.load();
  setPlayPause(true)
}
}, [musicData])


//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a10da9f1a6mshe5ae1481d97e396p17e20ajsn68fb334d3f80',
//       'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
//     }
//   };

// function getData(keyword){
//   setSearchItems('loading')
//       fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${keyword}`, options)
//       .then(response => response.json())
//       .then(response => {
   
//         setSearchItems(response.result.songs.slice(0,4).map(item=>{
//           return {...item, name:item.name.split('-')[0]}
//         }))
//       }
         
//         )
// }




//   function getMusic(item, toggleFunc){
//      setPlayPause(false)
//    !streaming && setStreaming(true);
//     fetch(`https://youtube-music1.p.rapidapi.com/get_download_url?id=${item.id}&ext=wav`, options)
// 	.then(response => response.json())
// 	.then(response => {
//     if(!response.result.download_url){
// console.log('audio not available')
//     }
//     else{
//       setMusicData({...item, audio: response.result.download_url})
//       toggleFunc(false)
//        input.current.value = null
//     }
//   })
    
// 	.catch(err => console.error(err))
//   .catch(err => console.error(err));
 
//   setSearchItems(null)
 
//   setTimeout(() => {
//     audioRef.current.load();
//     setPlayPause(true)
//   }, 1000);
// }





  return (
      <div className="page">
        <Navbar setMainPage={setMainPage} mainPage={mainPage} input={input} getData={getData} getMusic={getMusic} 
        searchItems={searchItems} setSearchItems={setSearchItems} streaming={streaming} setStreaming={setStreaming}/>

        <Player musicData={musicData} setMusicData={setMusicData} currentPlayList={currentPlayList} setCurrentPlaylist={setCurrentPlaylist}
         setPlayPause={setPlayPause} playPause={playPause} audioRef={audioRef}   audioVolume={audioVolume} setAudioVolume={setAudioVolume}
         audioDuration={audioDuration} setAudioDuration={setAudioDuration} audioTime={audioTime} setAudioTime={setAudioTime} loop={loop} setLoop={setLoop} 
         shuffle={shuffle} setShuffle={setShuffle}
        songIndex={songIndex} setSongIndex={setSongIndex} streaming={streaming} setStreaming={setStreaming}
        />

        <Main mainPage={mainPage} songIndex={songIndex} setMainPage={setMainPage} musicData={musicData} 
         audioVolume={audioVolume} setAudioVolume={setAudioVolume}
         audioDuration={audioDuration} setAudioDuration={setAudioDuration} audioTime={audioTime} setAudioTime={setAudioTime} loop={loop} setLoop={setLoop} 
         shuffle={shuffle} setShuffle={setShuffle}
        setMusicData={setMusicData} allSongs={allSongs} setAllSongs={setAllSongs}  playPause={playPause} setPlayPause={setPlayPause} 
        streaming={streaming} setStreaming={setStreaming} collections={collections} setCollections={setCollections} updateLike={updateLike}
        setSongIndex={setSongIndex} currentPlayList={currentPlayList} setCurrentPlaylist={setCurrentPlaylist} audioRef={audioRef}/>
      </div>
    );

}

export default App;
>>>>>>> 4caa802 (update)
