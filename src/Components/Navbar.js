import logo from '../assets/musica logo.png'
import { CloseCircle,
    SearchNormal1} from 'iconsax-react';
import { useState } from 'react';


export default function Navbar({getMusic, input, searchItems, getData}) {

    const[toggleSearchDisplay, setToggleSearchDisplay] = useState(false)

    function go(){
    input.current.value==='' ?  alert('Enter a keyword') : getData(input.current.value);
    }


    function openMenu(){
        let menu = document.querySelector('aside');
        menu.classList.toggle('show');
    }


    return (
        <header>
            <div className='flex px-8 py-4 md:py-0 md:h-20 gap-3 md:justify-center items-center md:px-0'>
            {/* <HambergerMenu  size="24" className='md:hidden'  color="white"/> */}
            <button onClick={openMenu} className='md:hidden menuBtn'>
            <span></span>
            <span></span>
            </button>
                <img src={logo} alt='musica logo'>
                </img>
               {toggleSearchDisplay ?  <CloseCircle onClick={()=>setToggleSearchDisplay(prev => !prev)} size="24" className="md:hidden ml-auto"/> :  <SearchNormal1 onClick={()=>setToggleSearchDisplay(prev => !prev)} size="24"  className="md:hidden ml-auto"/>}
                </div>

                <section className={toggleSearchDisplay ? 'search-bar show px-8 py-5 md:gap-6 flex flex-row-reverse md:flex-row md:items-center md:py-0 md:px-0' : 
                'search-bar px-8 py-5 md:gap-6 flex flex-row-reverse md:flex-row md:items-center md:py-0 md:px-0'}>
          <SearchNormal1 size="24" className='search-icon' onClick={go}/>
          <input ref={input} type='text' placeholder='Search songs' ></input>

{searchItems &&  <div className='search-items'>
{searchItems === 'loading' ? <p>Loading</p> : searchItems.map(item=>(
    <div className='' onClick={()=>getMusic(item, setToggleSearchDisplay)} key={item.id}>
        <img className='search-item-img' onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}} src={item.thumbnail}></img>
        <h3>{item.name}</h3>
        <p>{item.title}</p>
    </div>)
    )}
          </div>}
            </section>

        </header>
      );
  }
  

  