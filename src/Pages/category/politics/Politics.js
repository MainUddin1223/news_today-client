import React from "react";
import politicsBanner from '../../../assets/gif-banner.gif';
import featureImg1 from '../../../assets/home-1.jpg';
import politics from '../../../assets/poltics.jpg';
import Layout from "../../Layout/Layout";
import HeaderAddSection from "../../components/addSection";

const Politics = () => {
  return (
<div>
    <HeaderAddSection banner={politicsBanner}/>
<Layout>
<div className="bg-white">
    <h1 className="md:ml-24 text-3xl font-semibold py-8 border-b-2 mr-8">Politics</h1>
      <div className="grid md:grid-cols-4 mt-4">
        <div className="col-span-2 container mx-auto lg:w-3/4">
        <h3 className="sport-section font-semibold py-2 text-red-800">LATEST HEADLINES</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        <img src={featureImg1} alt="" className=" mx-auto"/>
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            iure facere, quidem ducimus hic maiores.
          </h1>
          <div className="news-link-section">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates dolorum, ipsam esse sit quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates dolorum, ipsam esse sit quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates dolorum, ipsam esse sit quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates dolorum, ipsam esse sit quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates dolorum, ipsam esse sit quasi?</p>
          </div>
        </div>
        <div className="mx-2">
        <h3 className="sport-section font-semibold py-2 text-red-800">Analysis</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        <div >
        <img src={politics} alt="" className=" mx-auto"/>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis.</h1>
        </div>
        <div>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
        </div>
        </div>
        <div className="mx-2">
        <h3 className="sport-section font-semibold py-2 text-red-800">POLITICAL CRISIS</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        <div >
        <img src={politics} alt="" className=" mx-auto"/>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis.</h1>
        </div>
        <div>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
            <p className="border-b-2 py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quae illo optio.
            </p>
        </div>
        </div>
        <div>
        <h3 className="sport-section font-semibold py-2 text-red-800">POLITICAL CRISIS</h3>
        <hr className="sport-border border-2 mb-4 border-red-800" />
        <div >
        <img src={politics} alt="" className=" mx-auto"/>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, facilis.</h1>
        </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
</Layout>
</div>
  );
};
export default Politics;
