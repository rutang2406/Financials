import React from 'react'
import {useState,useEffect} from 'react';
import Smaller from '../Newsarch/Smaller';
import Bigger from '../Newsarch/Bigger';
import Loading from '../Loading/Loading';

function Business() {
  const url = '/newsapi/news?q=business'
  const [data,setData] = useState([]);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const [processedData, setProcessedData] = useState({
    newswimg: [],
    newswoimg: []
  });
  useEffect(() => {
            const handleResize = () => setViewportWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
          }, []);

  useEffect(()=>{
    const datafetching=async () => {
      try{  
        const result1 = await fetch(url);
        const response1 = await result1.json();
        response1.articles = response1.articles.map(article=>({...article,topHeadline:true,intonewswoimg:false,index:0}))

        setData( [...response1.articles]);  
      }catch(error){
        console.error('Error Fetching Data',error)
      }
      finally{
        setIsLoading(false);
      }
          
    }
    datafetching();
  } ,[])
  

  useEffect(() => {
    if (data.length === 0) return;

    let newswimg = data.filter((article,index) => {
      if(article.title !== "[Removed]" && 
      article.urlToImage !== null && 
      article.content !== null){
      article.index=index  
      return true;
      }
      return false;
    });
    let newswoimg = data.filter((article,index) => {
      if(article.title !== "[Removed]" && 
      article.urlToImage === null && 
      article.content !== null ){
      article.index= index
      return true;  
    }
      return false; 
    });
    
    const x = newswimg.length;
    const y = newswoimg.length;
    const z = Math.floor((x + y) / 4);
    const a = z;
    const b = z * 3;
    const totaltoadd = b - y;
    const excess = Math.max(0, x + y - (b + a));
    const newsToadd = Math.min(totaltoadd, x - a);

    // Process arrays
    for (let i = a; i < (a + newsToadd); i++) {
      if (newswimg[i]) {
        newswimg[i].intonewswoimg = true;
      }
    }

    newswimg = newswimg.slice(0, x - excess);
    const currnewswoimg = newswoimg;
    newswoimg = currnewswoimg.concat(newswimg.filter(article => article.intonewswoimg === true));
    newswimg = newswimg.filter(article => article.intonewswoimg !== true);
    setProcessedData({ newswimg, newswoimg });
  }, [data]);
  if(isLoading){
    return(
      <Loading />
    )
  }
  return (
    
      <div className='w-[90vw] mx-auto flex scroll-smooth' style={{flexDirection: viewportWidth<725 ? 'column' : 'row'}}>
        <div> 
          {processedData.newswimg.map((article) => (
            <Bigger 
              key={article.index}
              url={article.url}
              urlToImage={article.urlToImage}
              topHeadline={article.topHeadline}
              name={article.source.name}
              title={article.title}
              content={article.content}
             />
          ))}
        </div>
        <div>
          {processedData.newswoimg.map((article) => (
          <Smaller 
            key={article.index}
            url={article.url}
            topHeadline={article.topHeadline}
            name={article.source.name}
            title={article.title}
          /> 
          ))}
        </div> 
      </div>
        
  );
}

export default Business