import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import './Home.css';

const Hero = ({newsList}) => {
  const [coverNews,setCoverNews] = useState({})
  const [latestNewsList,setLatestNewsList] = useState([])
  useMemo(()=>{
    if(newsList){
      const findCoverNews = newsList.find(item => item?.newsType === 'cover');
      findCoverNews?setCoverNews(findCoverNews):setCoverNews(newsList[0])
      setLatestNewsList(newsList.filter(news=>news.publishedDate.split('T')[0]===new Date().toISOString().split("T")[0]))
    }
  },[newsList])
  const navigate = useNavigate();



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="lg:container mx-auto col-span-4 md:grid grid-cols-3">
       { coverNews?.photos?.length ?<div className="lg:mx-8 mx-2 col-span-2 cursor-pointer" onClick={()=>navigate(`/news/123`)}>
          <img src={coverNews?.photos[0]} alt="" />
          <h1 className="text-xl font-medium">
            {coverNews?.title}
          </h1>
        </div>:<div>
          <h1>Server error</h1>
          </div>}
      <div>
        <h1 className="latest-report-header">Latest reports</h1>
      <div className="news-link-section col-span-1 font-medium">
 {
          newsList.length && newsList.map(newsTitle=>(
            <p onClick={()=>navigate(`/news/${newsTitle?._id}`)}>{newsTitle.title}</p>
          ))
        }
      </div>
      </div>
      </div>
      <div className=" col-span-2 grid grid-cols-2">
        {
          latestNewsList.length?latestNewsList.map(news=>(
        <div className=" bg-white m-2 cursor-pointer" onClick={()=>navigate(`/news/123`)}>
          <img src={news?.photos[0]} alt="" className="max-h-48 mx-auto" />
          <div className="">
          <h1 className="text-md font-bold">
           {news?.title}
          </h1>
          </div>
        </div>
          )):<div>Comming soon</div>
        }
      </div>
    </div>
  );
};
export default Hero;
