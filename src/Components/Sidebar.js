import { Home3, MusicLibrary2, Radio, VideoHorizontal, Profile, LoginCurve} from 'iconsax-react';
import {  NavLink,  } from "react-router-dom";

function Sidebar() {  
  function closeMenu(){
    let menu = document.querySelector('aside')
    menu.classList.toggle('show')
}

  return (
    <aside className='gap-10'>
    <div className='flex flex-col pl-7 md:px-4 md:py-4 mt-14 md:mt-0 gap-10'>
    <NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")} to="/home"> <Home3 className='icon' variant="Bold" /> <span className='md:hidden'>Home</span> </NavLink>
    <NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? "active"  : "")} to='/collections'> <MusicLibrary2 className='icon'  variant="Bold"/> <span className='md:hidden'>My Collections</span> </NavLink>
    <NavLink onClick={closeMenu}  className={({ isActive }) => (isActive ? "active"  : "")} to='/radio'> <Radio className='icon' variant="Bold" /> <span className='md:hidden'>Radio</span> </NavLink>
    
    
    <NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? "active"  : "")} to='/videos'> <VideoHorizontal className='icon' variant="Bold"/> <span className='md:hidden'>Music videos</span> </NavLink>
   </div>   

   <div className='flex flex-col pl-7 md:px-4 md:py-4 gap-10'>

   <NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? "active"  : "")} to='/profile'>  <Profile  variant="Bold" className='icon'/> <span className='md:hidden'>Profile</span> </NavLink>
 
   <NavLink onClick={closeMenu} className={({ isActive }) => (isActive ? "active"  : "")} to='/logout'> <LoginCurve  variant="Bold" className='icon'/> <span className='md:hidden'>Log out</span> </NavLink>
   
   </div>

   </aside>
    );
}

export default Sidebar;







