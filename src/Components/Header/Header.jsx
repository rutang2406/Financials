import {useState,useEffect} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header(){
    const[search,setSearch]=useState(false)
    const[searchTerm,setSearchTerm]=useState('')
    const navigate=useNavigate();
    const[menu,setMenu]=useState(true)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const handleSearch = () => {
      if (searchTerm.trim() !== '') {
        navigate(`/Search/${searchTerm}`);
        setSearchTerm('');
      } else {
        alert('Please enter a search term!');
      }
    };

    const keydown=(e)=>{
      if(e.key=='Enter'){
        handleSearch();
      }
    }

    useEffect(() => {
      const handleResize = () => setViewportWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    

    const menus=()=>{
      if(menu){
        document.getElementById('menu-icon').src='https://img.icons8.com/?size=100&id=46&format=png&color=000000'
        document.getElementById('mobile-menu').style.display='flex';
        setMenu(false);
      }
      else{
        document.getElementById('menu-icon').src='https://img.icons8.com/?size=100&id=120374&format=png&color=000000'
        document.getElementById('mobile-menu').style.display='none';
        setMenu(true);
      }
    }
    
    const searchclick=()=>{
      if(!search){
        setTimeout(()=>{
            document.getElementById('search-input').style.visibility = "visible";
            setSearch(true);
          },10)
        }
        else{
          setTimeout(()=>{
            document.getElementById('search-input').style.visibility="hidden";
            setSearch(false);
          },10)
        }
      }
    return (
       <>
          <div className='w-[95vw] flex justify-evenly items-center mt-3 mb-2'>
            <Link to='/' className='font-sans text-4xl lg:text-5xl sm:text-4xl font-semibold m-3 select-none hover:cursor-pointer'>Financials</Link >
            <div>
              <ul className='flex w-[60vw] text-md mt-3 font-medium justify-evenly '
               style={{display: viewportWidth < 725?  'none'  : 'flex' }}>
                <NavLink to={"economy"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Economy</ NavLink>
                <NavLink to={"politics"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Politics</ NavLink>
                <NavLink to={"business"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Business</ NavLink>
                <NavLink to={"technology"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Technology</ NavLink>
                <NavLink to={"sports"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Sports</ NavLink>
              </ul>
              <div style={{display: viewportWidth < 725? 'flex' : 'none'}} className='mr-[10px]'>
                <img id='menu-icon' src='https://img.icons8.com/?size=100&id=120374&format=png&color=000000'
                             className="h-6 w-6 cursor-pointer" onClick={menus}/></div>
            </div>
            <button onClick={searchclick} className='px-auto py-8 outline-none'>
              <img src="https://img.icons8.com/?size=100&id=7eX13e1GI7bn&format=png&color=000000" className='mt-2 mb-2 lg:h-7 lg:w-7 h-5 w-5'/>
            </button>
          </div>
          <hr className='w-[93vw] mx-auto border-[0.5px] border-gray-300'/>
          <div id='mobile-menu' className='h-[50vh] w-[80vw] mx-auto mt-5 rounded-md border-2 border-black justify-center overflow-y-auto static' style={{display:'none'}}>
           <ul>
              <li className='my-8'><NavLink to={"economy"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Economy</ NavLink></li>
              <li className='my-8'><NavLink to={"politics"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Politics</ NavLink></li>
              <li className='my-8'><NavLink to={"business"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Business</ NavLink></li>
              <li className='my-8'><NavLink to={"technology"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Technology</ NavLink></li>
              <li className='my-8'><NavLink to={"sports"} className={({isActive})=>`hover:text-gray-500 cursor-pointer lg:text-xl ${isActive?"text-gray-400":"text-black"}`}>Sports</ NavLink></li>
            </ul>
          </div>
          <div>
          <div style={{visibility:'hidden'}} id='search-input' className='w-[90vw] h-16 mx-auto mt-4 flex justify-center items-center' >
              <input type="text" value={searchTerm} onKeyDown={keydown} onChange={(e)=>setSearchTerm(e.target.value)}
               className='h-10 w-[90%] px-3 text-md lg:text-xl rounded-tl-lg rounded-bl-lg  outline-none border-2 border-gray-300' placeholder='Search News'/>
              <Link to={`search/${searchTerm}`} >
                <button onClick={handleSearch} className='border-2 border-black bg-black h-10 px-5 rounded-tr-lg rounded-br-lg text-white outline-none'>
                  Find
                </button>
              </Link>
          </div>
          </div>
        </>
    )    
}
export default Header;