import React from "react";
import politicsBanner from '../../../assets/gif-banner.gif';
import Layout from "../../Layout/Layout";
import HeaderAddSection from "../../components/addSection";
import CommonCategory from "../commonCategory";

const Politics = () => {
  return (
<div>
    <HeaderAddSection banner={politicsBanner}/>
<Layout>
<div className="bg-white">
    <h1 className="md:ml-24 text-3xl font-semibold py-8 border-b-2 mr-8">Politics</h1>
    <CommonCategory category="politics"/>
    </div>
</Layout>
</div>
  );
};
export default Politics;
