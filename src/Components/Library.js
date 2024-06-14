import {  PlayCircle, Heart} from 'iconsax-react';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Library({collections, collectionCategory, allSongs, streaming, 
   setSongIndex, setStreaming, audioRef, updateLike, songIndex, currentPlayList, setPlayPause, playPause, setCurrentPlaylist}) {
    const navigate = useNavigate();

    const [category, setCategory] = useState('Collection')
    const [collectionLikeData, setCollectionsLikeData]= useState(null)
    const [likedSongs, setLikedSongs]= useState(null)

    useEffect(()=>{    
       let playingSong = []    
        likedSongs && likedSongs.forEach(song=>{
            if(currentPlayList[songIndex].id === song.id && playPause === true){
                playingSong.push({...song, playing:true})
              }
              else{
                playingSong.push({...song, playing:false})
              }
        })
        
        setLikedSongs(playingSong)
        
        }, [allSongs, songIndex, currentPlayList])

    useEffect(()=>{
        let likedCollection = JSON.parse(sessionStorage.getItem("likedCollection")) || []
        let collectionArr = []
        if(likedCollection){
            collections.forEach(item => {
                if(likedCollection.indexOf(item.title) != -1){
                    collectionArr.push({...item, like: true})
                }
            });
            setCollectionsLikeData(collectionArr)
        }


        let likedSongs = JSON.parse(sessionStorage.getItem("likes"))
        let songArr = []
if(likedSongs){
  allSongs.forEach(song=>{
    if(likedSongs.indexOf(song.id) != -1){
     songArr.push(song)
    }
 })
 setLikedSongs(songArr)
}

    }, [allSongs, collections])

    function likeBtn(itemToAdd) {
        let likeData = JSON.parse(sessionStorage.getItem("likes")) || []
      
          if (likeData.indexOf(itemToAdd) != -1) {
            likeData.splice(likeData.indexOf(itemToAdd), 1)
          } else {
            likeData.push(itemToAdd);
          }
          sessionStorage.setItem('likes', JSON.stringify(likeData))
          updateLike()
      }

    function play(id){
        setCurrentPlaylist(likedSongs);
            streaming && setStreaming(false)
            playPause && setPlayPause(false)
           
           likedSongs.forEach((song, index)=>{
                if(song.id == id){
                   setSongIndex(index)
                }
            })
    
            setTimeout(() => {
              audioRef.current.load()
              setPlayPause(true)
            }, 1000);
                
    
        }

        function playAll(){
          streaming && setStreaming(false);
          playPause && setPlayPause(false)
        
          setCurrentPlaylist(likedSongs) 
        setSongIndex(0)
        
        setTimeout(() => {
        
          audioRef.current.load()
          setPlayPause(true)
        }, 1000);
        }


    function handleClick(category){
        collectionCategory.current=`${category}`
        setTimeout(() => {
            navigate('/home/top-charts');
        }, 500);
    }

    return (
        <div className="library page-transition page-pad pt-5">
          <section className='flex gap-4 category'>
            <p className={category=== 'Collection' ? 'active grow md:grow-0 text-center'  : 'grow md:grow-0 text-center'} onClick={()=>setCategory('Collection')}>My Collection</p>
            <p className={category=== 'Likes' ? 'active grow md:grow-0 text-center'  : 'grow md:grow-0 text-center'} onClick={()=>setCategory('Likes')}>Likes</p>
          </section>

        {category === 'Collection' && <section className='mt-5 page-transition collection flex flex-col md:flex-row gap-3'>
            {
                collectionLikeData && collectionLikeData.length > 0 ? collectionLikeData.map(item=>(
                    <article className='collection-card' key={item.id}>
                <img src={item.bg} alt='boom box'></img>
                <div className=''>
                    <div>
                        <h4>{item.title}</h4>
                        <p className='mb-3'>John Watts</p>
                        <p>03:15</p>
                        </div>

                    <NavLink onClick={()=>handleClick(item.category)} className='play-con'>
                    {/* <Play variant="Bold" /> */}
                    <svg className='play-icon' viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
<path d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767
 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z"/>
</svg>
                    </NavLink>
                </div>
            </article>
                )) : <p className='text-center'>Add a collection from homepage</p>
            }

           

          </section>}

          


          {category=== 'Likes' && <section className='mt-5 page-transition likes'>

        {likedSongs && likedSongs.length > 0 ? <>
          <article className='likes-hero'>
<img src='https://media.istockphoto.com/photos/young-pink-hair-girl-listening-music-in-headphones-picture-id1300324580?b=1&k=20&m=1300324580&s=170667a&w=0&h=csNLv_RqHxnWMsuzIIEGqCS_Wz9_OmrGXcOSIiyxwj4='></img>

<div className='gap-2'>
  <h3>Liked Songs</h3>
  <p> {likedSongs && likedSongs.length > 1 ? `${likedSongs.length} songs` : `1 song`}</p>
  <div> <button className='flex items-center gap-2'  onClick={playAll}> <PlayCircle className='icon' variant="Bold"/> <p>Play all</p></button></div>
 
</div>
</article>



            <article className='flex flex-col gap-4'>
            {
   likedSongs && likedSongs.map(song=> 
        (<div className={song.playing ? 'flex gap-2 md:gap-3 song-bar playing' : 'flex gap-2 md:gap-3 song-bar'} key={song.id}>
          <div className='flex gap-3 items-center'>
          <img src={song.backdrop}></img>
          <button className='hidden md:inline' onClick={()=>likeBtn(song.id)}>  {song.like ? <Heart className=''  variant="Bold"/>
            : <Heart className='' variant="Broken"/> }</button>
          </div>
        
          <div className='gap-0 md:gap-2 md:items-center title_genre' onClick={()=>play(song.id)}>
          <h3 className='md:justify-self-center'>{song.title} ~ {song.artist}</h3>
          
          <p className='genre md:justify-self-center'>{song.category[1]}</p>
          </div>
         
         <div className='flex gap-2 items-center'>
        
         <button className='hidden' onClick={()=>likeBtn(song.id)}>  {song.like ? <Heart className=''  variant="Bold"/>
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
        
        
        
        </div>))
}
            </article></> : <p className='text-center'>No songs found</p> } 


</section>}
          
        </div>
      );
  }
  

  