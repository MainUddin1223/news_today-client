import React from "react";
import Header from "../Layout/Header";
import NavigationList from "../Layout/NavigationList";
import Hero from "./Hero";
import LateatNews from "./LatestNews";

const Home = () => {
  return (
    <div>
         <div className="h-48">
        <h1>This is for featured news</h1>
      </div>
      <Header />
      <NavigationList/>
      <div className="">
        <div className="mt-4">
          {/* featured section */}
          <Hero/>
          {/* latest news sectin */}
          <div className="my-8">
          <LateatNews/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;