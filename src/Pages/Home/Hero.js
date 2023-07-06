import React from "react";
import { useNavigate } from "react-router";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
import featureImg3 from "../../assets/home-3.jpg";
import './Home.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
      <div className="lg:container mx-auto col-span-4 md:grid grid-cols-3">
        <div className="lg:mx-8 mx-2 col-span-2 cursor-pointer" onClick={()=>navigate(`/news/123`)}>
          <img src={featureImg1} alt="" />
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            iure facere, quidem ducimus hic maiores.
          </h1>
        </div>
      <div>
        <h1 className="latest-report-header">Latest reports</h1>
      <div className="news-link-section col-span-1">
        <p className="" onClick={()=>navigate(`/news/123`)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum!</p>
      </div>
      </div>
      </div>
      <div className=" col-span-2 grid grid-cols-2">
        <div className=" bg-white m-2 cursor-pointer" onClick={()=>navigate(`/news/123`)}>
          <img src={featureImg3} alt="" className="max-h-48 mx-auto" />
          <div className="">
          <h1 className="text-lg font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          </div>
        </div>
        <div className="bg-white m-2">
          <img src={featureImg3} alt="" className="max-h-48 " />
          <div className="">
          <h1 className="text-lg md:text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          </div>
        </div>
        <div className=" bg-white m-2">
          <img src={featureImg2} alt="" className="max-h-48 mx-auto" />
          <div className="">
          <h1 className="text-lg md:text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          </div>
        </div>
        <div className=" bg-white m-2">
          <img src={featureImg3} alt="" className="max-h-48" />
          <div className="">
          <h1 className="text-lg md:text-xl font-bold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
