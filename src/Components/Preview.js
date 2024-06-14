import { PlayCircle, MusicSquareAdd, Heart} from 'iconsax-react';
import { useEffect, useState } from 'react';

export default function Preview({collectionCategory, allSongs, streaming, setStreaming, 
   collections, setCurrentPlaylist,currentPlayList, audioRef, setSongIndex, songIndex, setPlayPause, playPause, updateLike}) {

const [category, setCategory] = useState(null)



useEffect(()=>{
let retrievedSongs = []
let data

collections.forEach(item=>{
  if(item.category === collectionCategory.current){
     data = item;
  }
})

allSongs.forEach(item=>{
  if(data.songs.indexOf(item.id) != -1){
    
    if(currentPlayList[songIndex].id === item.id && playPause === true){
      retrievedSongs.push({...item, playing:true})
    }
    else{
      retrievedSongs.push(item)
    }


  }
})

setCategory({...data,songs:retrievedSongs})

}, [allSongs, songIndex, currentPlayList, collections])






function likeSong(itemToAdd) {
  let likeData = JSON.parse(sessionStorage.getItem("likes")) || []

    if (likeData.indexOf(itemToAdd) != -1) {
      likeData.splice(likeData.indexOf(itemToAdd), 1)
    } else {
      likeData.push(itemToAdd);
    }
    sessionStorage.setItem('likes', JSON.stringify(likeData))
    updateLike()
}

function likeCollection(title){
  let likeCollection = JSON.parse(sessionStorage.getItem("likedCollection")) || []

  if (likeCollection.indexOf(title) != -1) {
      likeCollection.splice(likeCollection.indexOf(title), 1)
  } else {
      likeCollection.push(title);
  }
  sessionStorage.setItem('likedCollection', JSON.stringify(likeCollection))
  updateLike();
}


function playAll(){
  streaming && setStreaming(false);
  playPause && setPlayPause(false)
setCurrentPlaylist(category.songs) 
setSongIndex(0)

setTimeout(() => {
  audioRef.current.load()
  setPlayPause(true)
}, 1500);
}

   function play(id){
    setCurrentPlaylist(category.songs);
        streaming && setStreaming(false)
        playPause && setPlayPause(false)
       
       category.songs.forEach((song, index)=>{
            if(song.id == id){
               setSongIndex(index)
               
            }
        })

        setTimeout(() => {
         
          audioRef.current.load()
          setPlayPause(true)
        }, 1000);
            

    }





 
    return (
      <>  
    {category && <img src={category && category.bg} alt="speaker" className='preview-bg'></img>}
      <div className="preview page-transition">

          <article className='page-pad preview-content'>
            <div>
            <img className='page-transition' src={category && category.bg}  alt="speaker"></img>

<div className='flex flex-col gap-8'>

  <article>
  <h2>
  {category && category.title} 
  </h2>
  <p className="md:max-w-sm">{category && category.description}</p>

<div className="flex">
<span> {category && category.songs.length} songs-</span><span> {category && category.songs.length * 3} hrs+</span>
</div>

  </article>

  <article className='options flex flex-wrap gap-2 mb-5'>
    <button className='flex items-center gap-2' onClick={playAll}> <PlayCircle className='icon' variant="Bold"/> <p>Play all</p></button>
    <button className='flex items-center gap-2' onClick={()=>likeCollection(category.title)} >  <MusicSquareAdd className='icon'  variant="Bold"/>
    {category ? category.like ? <p>Remove from Collection</p>
    : <p>Add to Collection</p> : ''}  </button>
    
    <p onClick={()=>likeCollection(category.title)} className='flex items-center gap-2'>{category ? category.like ? <Heart className='icon'  color="#ff0000" variant="Bold"/>
    : <Heart className='icon'  color="#ff0000" variant="Broken"/> : ''} <span className='md:hidden'>Like</span></p>
  </article>
  
  </div>

            </div>

<div className='flex flex-col gap-4 mt-8'>

{category ? category.songs ?  category.songs.map(song=> 
(<div className={song.playing ? 'flex gap-2 md:gap-3 song-bar playing' : 'flex gap-2 md:gap-3 song-bar'}  key={song.id}>
  <div className='flex gap-3 items-center'>
  <img src={song.backdrop}></img>
  <button className='hidden md:inline' onClick={()=>likeSong(song.id)}>  {song.like ? <Heart className=''  variant="Bold"/>
    : <Heart className='' variant="Broken"/> }</button>
  </div>

  <div className='gap-0 md:gap-2 md:items-center title_genre' onClick={()=>play(song.id)}>
  <h3 className='md:justify-self-center'>{song.title} ~ {song.artist}</h3>
  {/* <span>{song.playing ? 'playing' : 'na'}</span> */}
  <p className='genre md:justify-self-center'>{song.category[1]}</p>
  </div>
 
 <div className='flex gap-2 items-center'>

 <button className='hidden' onClick={()=>likeSong(song.id)}>  {song.like ? <Heart className=''  variant="Bold"/>
    : <Heart className='' variant="Broken"/> }</button>

  <div className='flex md:justify-between md:gap-2 flex-col-reverse md:flex-row items-end md:items-center w-full'>
     <p>{song.length}</p>

<button><svg className='more-options' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25782 8.94595C8.63788 8.94595 8.94598 8.63785 8.94598 8.25779C8.94598 7.87774 8.63788 7.56964 8.25782 7.56964C7.87777 7.56964 7.56967 7.87774 7.56967 8.25779C7.56967 8.63785 7.87777 8.94595 8.25782 8.94595Z" strokeWidth="1.3763" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.25782 4.12887C8.63788 4.12887 8.94598 3.82077 8.94598 3.44072C8.94598 3.06066 8.63788 2.75256 8.25782 2.75256C7.87777 2.75256 7.56967 3.06066 7.56967 3.44072C7.56967 3.82077 7.87777 4.12887 8.25782 4.12887Z"  strokeWidth="1.3763" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.25782 13.763C8.63788 13.763 8.94598 13.4549 8.94598 13.0749C8.94598 12.6948 8.63788 12.3867 8.25782 12.3867C7.87777 12.3867 7.56967 12.6948 7.56967 13.0749C7.56967 13.4549 7.87777 13.763 8.25782 13.763Z"  strokeWidth="1.3763" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
  </div>
    </div>



</div>)): '' : ''}
</div>


          </article>

         
          
          
        </div>
      </>
      
      );
  }
  

  