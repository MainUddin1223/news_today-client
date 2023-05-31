import React from "react";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
const LateatNews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        <div>
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
        <div className="col-span-2">
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
        <div class=" bg-white mx-2">
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
