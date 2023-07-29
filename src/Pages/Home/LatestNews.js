import React, { useEffect, useState } from "react";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
const LateatNews = ({newsList}) => {
const [featuredNews,setFeaturedNews] = useState({});
const [spotlight,setSpotlight] = useState({});
const [top,setTop] = useState({});
useEffect(()=>{
  newsList.find(item => setFeaturedNews(item?.newsType === 'featured'));
  newsList.find(item => setSpotlight(item?.newsType === 'spotlight'));
  newsList.find(item => setTop(item?.newsType === 'top'));
},[])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        <div>
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">MORE TOP STORIES</h3>
        </div>
        {newsList.length?<div className=" bg-white mx-2">
            <img src={newsList[0].photos[0]} alt="" className="h-48 mx-auto" />
           <div className="">
           <a href="/">
             {newsList[0].title}
            </a>
           </div>
          </div>:
        <div className=" bg-white mx-2">
            <img src={featureImg2} alt="" className="h-48 mx-auto" />
           <div className="">
           {/* <a href="/">
              {" "}
             qq Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a> */}
           </div>
          </div>
}        </div>
        <div className="lg:col-span-2">
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">FEATURED</h3>
        </div>
        {Object.keys(featuredNews).length?
        <div className=" bg-white mx-2">
        <img src={featuredNews.photos[0]} alt="" className=" mx-auto" />
       <div className="">
       <a href="/">
          {featuredNews.title}
        </a>
       </div>
      </div>:
        <div className=" bg-white mx-2">
            <img src={featureImg1} alt="" className=" mx-auto" />
           <div className="">
           <a href="/">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <a href="/">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
           </div>
          </div>}
        </div>
        <div>
        <div className=" bg-white mx-2 ">
          <div className="h-64 bg-blue-100 mt-4 lg:block hidden">
            <h1>Add section</h1>
          </div>
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">SPOTLIGHT</h3>
        </div>
        {Object.keys(spotlight).length? <div>
         <img src={spotlight.photos[0]} alt="" className="h-48 mx-auto" />
           <div className="">
           <a href="/">
           {spotlight.title}
            </a>
           </div>
         </div>:
          <div>
          <img src={featureImg1} alt="" className="h-48 mx-auto" />
            <div className="">
            <a href="/">
               {" "}
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </a>
             <a href="/">
               {" "}
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </a>
             <a href="/">
               {" "}
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </a>
            </div>
          </div>}
          </div>
        </div>
    </div>
  );
};

export default LateatNews;
