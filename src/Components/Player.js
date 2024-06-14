



  import { useEffect, useRef } from 'react';
  import prevIcon from '../assets/previous.svg'
  import nextIcon from '../assets/next.svg'
  import playIcon from '../assets/play icon.svg'
  import volume from '../assets/volume-high.svg'
  import { Pause} from 'iconsax-react';
  import { NavLink } from "react-router-dom";
  
  export default function Player({musicData, playPause, setPlayPause, songIndex, 
    setSongIndex, streaming, currentPlayList, setCurrentPlaylist, audioRef,
    audioVolume, setAudioVolume,audioDuration,setAudioDuration,audioTime,setAudioTime,loop,setLoop,shuffle,setShuffle}) {
  
  const seekBar = useRef('')
  const volumeBar = useRef('')
  
useEffect(()=>{
    audioRef.current.volume = audioVolume
  }, [audioVolume])
    
  
  
  
  useEffect(()=>{
  if(playPause){
    audioRef.current.play()
  }
  else{
    audioRef.current.pause()
    setCurrentPlaylist(prev=>prev.map(item=> ({...item, playing:false})))
  }
  },[playPause, songIndex])


  
  
  function next(){
    if(loop){
      setSongIndex(songIndex)
      audioRef.current.load()
      audioRef.current.play()
    }

    else if(shuffle){
    setSongIndex(Math.floor(Math.random() * currentPlayList.length))
    audioRef.current.load()
    }

    else{
      if(songIndex >= currentPlayList.length - 1){
        setSongIndex(0);
      }
      else{
        setSongIndex(index => index + 1)
      } 
      audioRef.current.load()
    }
  }


  function prev(){
    setPlayPause(false)
    if(audioTime > 20){
      setSongIndex(index=>index)
      audioRef.current.load()
      audioRef.current.play()
    }

    else{
      if(songIndex === 0){
        setSongIndex(currentPlayList.length - 1)
      }
      else{
        setSongIndex(index=>index - 1)
      } 
      audioRef.current.load()
    }
 
  }

  let progressBar ={
    width: `${audioTime / audioDuration * 100}%`
  }

  let volumeSlider ={
    width:`${audioVolume * 100}%`
  }


  function seek(e){
let width = seekBar.current.clientWidth
let seekProgress = e.nativeEvent.offsetX / width * 100
audioRef.current.currentTime = seekProgress / 100 * audioDuration;
  }

  function volumeSlide(e){
    let width = volumeBar.current.clientWidth
    let volume = e.nativeEvent.offsetX / width * 100

    setAudioVolume(volume / 100)
 
    // audioRef.current.currentTime = volume / 100 ;
      }
  
  // function mSet(){
  //   audioRef.current.currentTime = dur.current.value
  // onLoadedMetadata={mDur} onTimeUpdate={mPlay} preload="metadata"
  // }
  
  
      return (
          <div className="player page-pad py-7 md:py-4">
            <audio className='hidden' ref={audioRef} controls 
             onEnded={next} onLoadedMetadata={()=>{ setAudioDuration(audioRef.current.duration);}} 
             onTimeUpdate={()=>{setAudioTime(audioRef.current.currentTime)}}>

   <source src={streaming ? musicData.audio : currentPlayList[songIndex].audio} type="audio/mpeg"/>
  Your browser does not support the audio element.
  
  </audio>
  
  <NavLink to="/home/player" className='flex self-center song-details gap-3'>
  <img onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}}  src={ streaming ? musicData.thumbnail :currentPlayList[songIndex].backdrop}></img>
  <div>
    <h4>{streaming ? musicData.title :currentPlayList[songIndex].title}</h4>
    <p>{streaming ? musicData.name :currentPlayList[songIndex].artist}</p>
  </div>
  </NavLink>
  
  <article className='flex md:flex-col items-center justify-end md:justify-start md:justify-between gap-3'>
    <div className='flex gap-9 items-center justify-self-end md:justify-self-center'>
    <svg onClick={()=>setShuffle(prev=>!prev)} className={shuffle ? 'active-icon player-icons hidden md:inline-block' : 'player-icons hidden md:inline-block'}  viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 12.7594C14.5 12.7461 14.4933 12.7328 14.4933 12.7194C14.4867 12.6661 14.48 12.6128 14.46 12.5661C14.4333 12.5061 14.4 12.4594 14.36 12.4128C14.36 12.4128 14.36 12.4061 14.3533 12.4061C14.3067 12.3594 14.2533 12.3261 14.1933 12.2994C14.1333 12.2728 14.0667 12.2594 14 12.2594L10.8867 12.2728C10.8867 12.2728 10.8867 12.2728 10.88 12.2728C10.48 12.2728 10.0933 12.0861 9.85333 11.7661L9.04 10.7194C8.87333 10.4994 8.56 10.4594 8.34 10.6328C8.12 10.8061 8.08 11.1128 8.25333 11.3328L9.06666 12.3794C9.5 12.9394 10.18 13.2728 10.8867 13.2728H10.8933L12.7933 13.2661L12.32 13.7394C12.1267 13.9328 12.1267 14.2528 12.32 14.4461C12.42 14.5461 12.5467 14.5928 12.6733 14.5928C12.8 14.5928 12.9267 14.5461 13.0267 14.4461L14.36 13.1128C14.4067 13.0661 14.44 13.0128 14.4667 12.9528C14.4867 12.8861 14.5 12.8194 14.5 12.7594Z"/>
<path d="M5.61333 5.23275C5.18 4.63275 4.48667 4.27942 3.74667 4.27942C3.74 4.27942 3.74 4.27942 3.73333 4.27942L2 4.28609C1.72667 4.28609 1.5 4.51275 1.5 4.78609C1.5 5.05942 1.72667 5.28609 2 5.28609L3.74 5.27942H3.74667C4.16667 5.27942 4.56 5.47942 4.8 5.81942L5.52 6.81942C5.62 6.95275 5.77333 7.02609 5.92667 7.02609C6.02667 7.02609 6.13333 6.99275 6.22 6.93275C6.44667 6.76609 6.49333 6.45275 6.33333 6.23275L5.61333 5.23275Z"/>
<path d="M14.4933 4.82606C14.4933 4.81273 14.5 4.79939 14.5 4.79273C14.5 4.72606 14.4867 4.65939 14.46 4.59939C14.4333 4.53939 14.4 4.48606 14.3533 4.43939L13.02 3.10606C12.8267 2.91273 12.5067 2.91273 12.3133 3.10606C12.12 3.29939 12.12 3.61939 12.3133 3.81273L12.7867 4.28606L10.9667 4.27939C10.96 4.27939 10.96 4.27939 10.9533 4.27939C10.1867 4.27939 9.46667 4.65939 9.04 5.30606L4.78 11.6927C4.54 12.0527 4.13333 12.2727 3.7 12.2727H3.69333L2 12.2594C1.72667 12.2594 1.5 12.4794 1.5 12.7594C1.5 13.0327 1.72 13.2594 2 13.2594L3.7 13.2661C3.70667 13.2661 3.70667 13.2661 3.71333 13.2661C4.48667 13.2661 5.2 12.8861 5.62667 12.2394L9.88667 5.85273C10.1267 5.49273 10.5333 5.27273 10.9667 5.27273H10.9733L14 5.28606C14.0667 5.28606 14.1267 5.27273 14.1933 5.24606C14.2533 5.21939 14.3067 5.18606 14.3533 5.13939C14.3533 5.13939 14.3533 5.13273 14.36 5.13273C14.4 5.08606 14.44 5.03939 14.46 4.97939C14.48 4.93273 14.4867 4.87939 14.4933 4.82606Z"/>
</svg>

  {/* <img className='' src={shuffleIcon}></img> */}
  
  <img className='player-icons backward hidden md:inline-block' onClick={prev} src={prevIcon}></img>
  
  <div className='play-icon-con p-3' onClick={()=>setPlayPause(prev=>!prev)}>{playPause ? <Pause className='player-icons play' variant="Bold"/>
    : <img className='player-icons play' src={playIcon}></img>}</div>
  
  <img className='player-icons forward' onClick={next} src={nextIcon}></img>
 
  <svg onClick={()=>setLoop(prev=>!prev)} className={loop ? 'active-icon player-icons hidden md:inline-block' : ' player-icons hidden md:inline-block'}  viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
<path d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94599 0.833328 8.65932C0.833328 5.98599 2.99999 3.81266 5.66666 3.81266L9.71333 3.82599L8.98666 3.13266C8.78666 2.93932 8.77999 2.62599 8.97333 2.42599C9.16666 2.22599 9.48 2.21932 9.68 2.41266L11.3067 3.97266C11.4533 4.11266 11.5 4.33266 11.4267 4.51932C11.3533 4.70599 11.1667 4.83266 10.96 4.83266L5.66666 4.81932C3.55333 4.81932 1.83333 6.54599 1.83333 8.66599C1.83333 9.68599 2.23333 10.6527 2.96 11.3793C3.15333 11.5727 3.15333 11.8927 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z" />
<path d="M6.66666 15.2727C6.53999 15.2727 6.41999 15.226 6.31999 15.1327L4.69333 13.5727C4.54666 13.4327 4.49999 13.2127 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7127L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.87933C14.1733 7.85933 13.7733 6.89266 13.0467 6.166C12.8533 5.97266 12.8533 5.65266 13.0467 5.45933C13.24 5.266 13.56 5.266 13.7533 5.45933C14.6667 6.37933 15.1733 7.59266 15.1733 8.87933C15.1733 11.5527 13.0067 13.726 10.34 13.726L6.29333 13.7127L7.01999 14.406C7.21999 14.5993 7.22666 14.9127 7.03333 15.1127C6.92666 15.2193 6.79999 15.2727 6.66666 15.2727Z" />
<path d="M8.16667 11.0527C7.89334 11.0527 7.66667 10.826 7.66667 10.5527V8.29267L7.54 8.43267C7.35334 8.63934 7.04 8.65267 6.83334 8.47267C6.62667 8.29267 6.61334 7.97267 6.79334 7.766L7.79334 6.65267C7.93334 6.49934 8.15334 6.446 8.34667 6.51934C8.54 6.59934 8.66667 6.77934 8.66667 6.99267V10.5593C8.66667 10.8327 8.44 11.0527 8.16667 11.0527Z" />
</svg>

    </div>


 <div className='md:w-full hidden md:block' id='duration' ref={seekBar} onClick={(e)=>seek(e)}>
    <div style={progressBar} id='progress'>
      <svg id='thumbnail' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_1)">
<circle cx="12" cy="12" r="4" fill="#FACD66"/>
</g>
<circle cx="12" cy="12" r="6.5" stroke="white"/>
<defs>
<filter id="filter0_d_0_1" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.92 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>

</div>
    </div>

  </article>
  
  <article className='hidden md:flex items-center gap-3'>
  <img className='player-icons' src={volume}></img>
  <div className='w-full' id='volume' ref={volumeBar} onClick={(e)=>volumeSlide(e)}>
    <div style={volumeSlider} id='volumeSlider'></div>
  </div>
  </article>
          </div>
        );
    }
    
  
    
    
  
    