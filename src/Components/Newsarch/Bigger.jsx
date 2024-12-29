import React from 'react'
import {useState, useEffect,useCallback} from 'react';
function Bigger(props){
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    useEffect(() => {
                const handleResize = () => setViewportWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
              }, []);
    const geturl=useCallback((weburl) => {
        if (!weburl) return '';
        try {
          const startIndex = weburl.indexOf("//") + 2;
          const endIndex = weburl.indexOf("/", startIndex);
          const websiteName = endIndex === -1 ? weburl.slice(startIndex) : weburl.slice(startIndex, endIndex);
          return `${import.meta.env.VITE_IMAGE_URL}/${websiteName}?c=${import.meta.env.VITE_IMAGE_API_KEY}`;
        } catch (error) {
          console.error('Error processing URL:', error);
          return '';
        }
      }, []);
  return (
    <div className='w-[40vw] h-auto mx-auto my-10' style={{width: viewportWidth<725 ? '90vw' : '45vw'}}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            {(props.topHeadline)?<p className="text-red-600 text-xl font-sans ">EXCLUSIVE</p>:null} 
            <img src={props.urlToImage} alt={props.title} className='w-[90%] h-[35%] object-cover my-5 ' />
            <div className='mt-5 flex items-center'>
                <img src={geturl(props.url)} className='w-6 h-6 mr-3' />
                <p className='text-gray-600 text-md font-sans'>{props.name}</p>
            </div>
            <div className='w-[90%] my-5'>
                <h3 className='font-sans text-2xl font-bold my-5'>{props.title}</h3>
                <p className='font-sans text-xl font-normal'>{props.content}</p>
            </div>
        </a>
        <hr className='w-[93%] border-1 border-gray-600' />
    </div>
  )
}

export default Bigger;