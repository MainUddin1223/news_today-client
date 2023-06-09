import React from "react";
import featureImg1 from "../../assets/home-1.jpg";
import featureImg2 from "../../assets/home-2.jpg";
import featureImg3 from "../../assets/home-3.jpg";

const Hero = ()=>{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="container mx-auto ">
          <div className="mx-8 ">
            <img src={featureImg1} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
              numquam consectetur fuga incidunt veritatis eius amet
              doloremque possimus, perferendis ducimus, ex animi minus
              aperiam minima adipisci culpa quaerat? Nisi, tenetur!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2">
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
          <div className="... bg-white">
            <img src={featureImg3} alt="" className="h-48" />
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
          <div className="... bg-white h-48">
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
          <div className="... bg-white">
            <img src={featureImg3} alt="" className="h-48" />
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
    )
}
export default Hero