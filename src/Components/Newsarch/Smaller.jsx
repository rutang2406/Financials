import React from "react";
import {useState, useEffect,useCallback} from 'react';
function Smaller(props){
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

    return(
        <div className= 'w-[40vw] h-auto  px-10 py-2 my-10 mx-auto'  style={{width: viewportWidth<725 ? '90vw' : '45vw'}}>
                <a href={props.url} target="_blank">

                    {(props.topHeadline)?<p className="text-red-600 text-xl font-sans ">EXCLUSIVE</p>:null} 
                    <div className="flex items-center my-4">
                        <img src={geturl(props.url)} className="w-6 h-6 mr-3" />
                        <p className="text-gray-600 text-md font-sans">{props.name}</p>
                    </div>   
                    <div className="w-[90%] mb-10">
                        <h3 className="text-xl font-sans">{props.title}</h3>
                    </div>
                </a>
                <hr className="w-[93%] border-1 border-gray-600"/>
        </div>
    );    
}
export default Smaller;