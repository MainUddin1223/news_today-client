import React from "react";
import banner from "../../assets/banner.png";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import NavigationList from "../Layout/NavigationList";
import HeaderAddSection from "../components/addSection";
import Hero from "./Hero";
import LateatNews from "./LatestNews";
import LifeStyleSection from "./LifestyleSection";
const Home = () => {
  return (
    <div className="relative ">
      <HeaderAddSection banner={banner}/>
      <div className="bg-white">
        <Header />
        <div className="mx-4">
          <NavigationList />
        </div>
        <div className="">
          <div className="mt-4">
            {/* featured section */}
            <Hero />
            {/* latest news sectin */}
            <div className="my-8">
              <LateatNews />
            </div>
            <div>
              <LifeStyleSection/>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
