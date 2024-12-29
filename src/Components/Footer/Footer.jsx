import React from "react";
import {useEffect,useState} from "react";
function Footer(){
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
        
    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
    <>
        <hr className='w-[93vw] mx-auto border-[0.5px] mb-10 border-gray-300 mt-10'/> 
        <div className='w-[90vw] h-auto mx-auto flex  flex-wrap' style={{flexDirection: viewportWidth < 725? 'column' : 'row'}}> 
            <div className="w-[45vw] h-[20vh] flex justify-start items-center ">
                <h1 className='text-5xl md: font-normal ml-4 select-none'>Financials
                <br /> <p className='text-xl font-thin ml-1 select-none'>Developed by Rutang Patel</p>
                </h1>
            </div>
            <div className='w-[45vw] h-[20vh] flex justify-center items-center flex-nowrap' style={{width: viewportWidth < 725? '100%' : '45vw'}}>
                <a href="https://www.linkedin.com/in/rutang-patel-ba3033206" target="_blank"><img src="https://img.icons8.com/?size=100&id=447&format=png&color=1A1A1A" className='h-10 w-10 m-5' alt="LinkedIn"/></a>
                <a href="https://github.com/rutang2406" target="_blank"><img src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000" className='h-10 w-10 m-5' alt="Github" /></a>
                <a href="mailto:rutangpatel2406@gmail.com" target='_blank'><img src="https://img.icons8.com/?size=100&id=38159&format=png&color=1A1A1A" className='h-10 w-10 m-5' alt="Email" /></a>
                <a href="https://x.com/imrutang2406?t=FVDrGSp0BnxQERUS5zxTGQ&s=08" target='_blank'><img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=1A1A1A" className='h-10 w-10 m-5'  alt="X" /></a>
                <a href="https://www.instagram.com/rutang_2406?igsh=YTg0cjQ5ODdlcG8x" target='_blank'><img src="https://img.icons8.com/?size=100&id=32292&format=png&color=1A1A1A" className='h-10 w-10 m-5' alt="Instagram" /></a>
            </div>
        </div>
        <hr className='w-[93vw] mx-auto border-[0.5px] border-gray-300'/>
    </>
    )
}
export default Footer;