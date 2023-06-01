import React from "react";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
const LateatNews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        <div>
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">MORE TOP STORIES</h3>
        </div>
        <div class=" bg-white mx-2">
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
        <div className="lg:col-span-2">
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">FEATURED</h3>
        </div>
        <div class=" bg-white mx-2">
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
        <div class=" bg-white mx-2 ">
          <div className="h-64 bg-blue-100 mt-4 lg:block hidden">
            <h1>Add section</h1>
          </div>
        <div className="mx-4 mt-4">
        <hr className="border-1  border-gray-300" />
        <h3 className="font-semibold py-2 text-red-800">SPOTLIGHT</h3>
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
  );
};

export default LateatNews;
