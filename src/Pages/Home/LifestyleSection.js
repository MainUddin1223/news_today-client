import React from "react";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
import './Home.css';
const LifeStyleSection = () => {
  return (
 <div>
        <h1 className="text-3xl ml-8 mr-8 border-b-2 p-2">Life Style</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        <div>
        <div className="mx-4 mt-4">
        <h3 className="sport-section font-semibold py-2 text-red-800">SPORT</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        </div>
        <div className=" bg-white mx-2">
            <img src={featureImg2} alt="" className="h-48 mx-auto" />
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
          </div>
        </div>
        <div className="">
        <div className="mx-4 mt-4">
        <h3 className="sport-section font-semibold py-2 text-red-800">HEALTH</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        </div>
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
          </div>
        </div>
        <div>
        <div className=" bg-white mx-2 ">
        <div className="mx-4 mt-4">
        <h3 className="sport-section font-semibold py-2 text-red-800">STYLE</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        </div>
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
          </div>
        </div>
    </div>
 </div>
  );
};

export default LifeStyleSection;
