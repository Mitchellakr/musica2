import { useState, useEffect,useRef } from "react";
import leadImage from '../assets/Lead-image.png'
import {Heart} from 'iconsax-react';
import { NavLink } from "react-router-dom";
import songData from "./SongData";
import Man from '../assets/Pexels Photo by Eric Esma.png'
import Waves from '../assets/waves.png'
import stackImg from '../assets/stack.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Home({collectionCategory, collections, setCollections,
     updateLike, allSongs,streaming, setStreaming, playPause, setPlayPause, setCurrentPlaylist, setSongIndex, audioRef}) {
   

    useEffect(()=>{
        let likedCollection = JSON.parse(sessionStorage.getItem("likedCollection"))
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
    }, [])


    function likeCollection(title){
        let likeCollection = JSON.parse(sessionStorage.getItem("likedCollection")) || []

        if (likeCollection.indexOf(title) != -1) {
            likeCollection.splice(likeCollection.indexOf(title), 1)
        } else {
            likeCollection.push(title);
        }
        sessionStorage.setItem('likedCollection', JSON.stringify(likeCollection))
        updateLike()
    }

 
    function play(id){
        setCurrentPlaylist(allSongs)
        streaming && setStreaming(false)
        playPause && setPlayPause(false)
        allSongs.forEach((song, index)=>{
            if(song.id == id){
               setSongIndex(index)
            }
        })

        setTimeout(() => {
            audioRef.current.load()
            setPlayPause(true)
          }, 1000);
    }

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



    return (
        <div className="home page-pad page-transition">
            <section className='hero pt-3'>

            <article className="">
            
                <div className="hero-details p-8 flex justify-between flex-col">
                    <h3>Curated playlist</h3>
                    <div className="mt-auto md:mt-0">
                        <h2>R & B Hits</h2>
                        <p className="md:max-w-xs">All mine, Lie again, Petty call me everyday,
                            Out of time, No love, Bad habit,
                            and so much more</p>
                    </div>

                    <div className="flex gap-3 mt-12 md:mt-0">
                        <img className="" src={stackImg}></img>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.88371 0.233856C8.59771 0.25557 9.28904 0.380237 9.95884 0.608037H10.0257C10.071 0.62957 10.105 0.65337 
10.1277 0.674904C10.3782 0.75537 10.615 0.846037 10.8417 0.970704L11.2724 1.16337C11.4424 1.25404 11.6464 1.4229 11.7597 
1.49204C11.873 1.5589 11.9977 1.62804 12.0997 1.70624C13.3588 0.744037 14.8877 0.222704 16.463 0.233856C17.1782 0.233856 
17.8922 0.334904 18.571 0.562704C22.7542 1.9227 24.2615 6.5127 23.0024 10.5247C22.2884 12.5749 21.121 14.446 19.5922 
15.9749C17.4037 18.0942 15.0022 19.9756 12.417 21.5962L12.1337 21.7674L11.839 21.5849C9.24484 19.9756 6.82971 18.0942 
4.62084 15.9636C3.10218 14.4347 1.93371 12.5749 1.20838 10.5247C-0.0722904 6.5127 1.43504 1.9227 5.66351 0.538904C5.99218
 0.42557 6.33104 0.346237 6.67104 0.302037H6.80704C7.12551 0.25557 7.44171 0.233856 7.75904 0.233856H7.88371ZM17.9817 
 3.81537C17.517 3.65557 17.007 3.90604 16.837 4.38204C16.6784 4.85804 16.9277 5.37937 17.4037 5.54824C18.1302 5.82024 
 18.6164 6.53537 18.6164 7.32757V7.3627C18.5948 7.62224 18.673 7.8727 18.8317 8.06537C18.9904 8.25804 19.2284 8.37024 
 19.4777 8.39404C19.9424 8.38157 20.339 8.0087 20.373 7.53157V7.3967C20.407 5.8089 19.4448 4.3707 17.9817 3.81537Z" fill="white"/>
</svg>

<p>33K Likes</p>
</div>
                </div>

                <div className="hidden man md:flex items-end">
                <img src={Man}></img>
                </div>
                <img className="waves" src={Waves}>
        </img>
        
            </article>

           <article className="top-charts flex flex-col justify-center gap-2">
            <h2>Top Charts</h2>
            <section className="flex md:flex-col md:justify-center gap-3">

                {
                    collections && collections.map((item, index)=>(
                        <div className="flex justify-between" key={index}> 
                        <NavLink onClick={()=>{collectionCategory.current=`${item.category}`}} className="flex flex-col items-start md:flex-row gap-3 md:items-center" to='/home/top-charts'>
                        <img src={item.bg}></img>
                        <div className="flex flex-col">
                        <h3>{item.title}</h3>
                        <p>Swade Johnson</p>
                        <span className="mt-5 md:mt-0">3:12:13</span>
                        </div>
                        </NavLink>
                        
                        <div className="flex md:items-center justify-center">
                           <span className="flex md:items-center justify-center top-heart-con" onClick={()=>likeCollection(item.title)}>{item.like ? <Heart className='icon'  variant="Bold"/> : <Heart className='icon'  variant="Broken"/>}</span>
                        </div>
                                 </div>
                    ))
                }

            </section>
            

           </article>
            
            </section>

            <section>
                <article className="my-8">
                <h3 className="font-bold text-xl my-3">New releases</h3>

                <Swiper className="home-slider"
modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={"auto"}
    >

    {
    allSongs.filter(song=>song.category.indexOf('Week') != -1).map(item=>    <SwiperSlide key={item.id}>
        <div className="flex flex-col song-card gap-1">
            <img onClick={()=>play(item.id)} src={item.backdrop || 'https://naijamusics.com/wp-content/uploads/2022/03/The-Weeknd-Blinding-Lights_-_Naijamusics.com.mp3'}></img>
             <div className="flex justify-between">
             <div>
            <h4>{item.title}</h4>
             <p>{item.artist}</p>
             </div>

         <button onClick={()=>likeSong(item.id)}>  {item.like ? <Heart className=''  variant="Bold"/>
    : <Heart className='' variant="Broken"/> }</button>
         </div>
            </div> </SwiperSlide>)
                  }
</Swiper>
                </article>

                <article className="my-8">
                <h3 className="font-bold text-xl my-3">In your Area</h3>
                <Swiper className="home-slider"
modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={"auto"}
    >
    {
    allSongs.filter(song=>song.category.indexOf('Area') != -1).map(item=>    <SwiperSlide key={item.id}>
        <div  className="flex flex-col song-card gap-1">
            <img onClick={()=>play(item.id)} src={item.backdrop || 'https://naijamusics.com/wp-content/uploads/2022/03/The-Weeknd-Blinding-Lights_-_Naijamusics.com.mp3'}></img>
             <div className="flex justify-between">
             <div>
            <h4>{item.title}</h4>
             <p>{item.artist}</p>
             </div>

         <button onClick={()=>likeSong(item.id)}>  {item.like ? <Heart className=''  variant="Bold"/>
    : <Heart className='' variant="Broken"/> }</button>
         </div>
            </div> </SwiperSlide>)
                  }
</Swiper>
                </article>
                

            </section>

            <section>

                <article className="my-8">
                <h3 className="font-bold text-xl my-3">Workout</h3>
                <Swiper className="home-slider"
modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={"auto"}
    >
    {
    allSongs.filter(song=>song.category.indexOf('Workout') != -1).map(item=>    <SwiperSlide key={item.id}>
        <div  className="flex flex-col song-card gap-1">
            <img onClick={()=>play(item.id)} src={item.backdrop || 'https://naijamusics.com/wp-content/uploads/2022/03/The-Weeknd-Blinding-Lights_-_Naijamusics.com.mp3'}></img>
             <div className="flex justify-between">
             <div>
            <h4>{item.title}</h4>
             <p>{item.artist}</p>
             </div>

         <button onClick={()=>likeSong(item.id)}>  {item.like ? <Heart className=''  variant="Bold"/>
    : <Heart className='' variant="Broken"/> }</button>
         </div>
            </div> </SwiperSlide>)
                  }
</Swiper>
                </article>
                

            </section>
        </div>
      );
  }
  

  