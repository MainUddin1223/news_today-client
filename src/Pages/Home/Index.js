import React, { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import { useAppContext } from "../../contextProvider/useAppcontext";
import { useRequest } from "../../utilis/apiRequest";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import NavigationList from "../Layout/NavigationList";
import HeaderAddSection from "../components/addSection";
import Loader from '../loader/Loader';
import Hero from "./Hero";
import LateatNews from "./LatestNews";
import LifeStyleSection from "./LifestyleSection";
const Home = () => {
  const [newsList,setNewsList] = useState([])
  const { appLoading,scrollToTop } = useAppContext();
  const [getNews] = useRequest()

const handleNewsList = async()=>{
try {
  const path = 'public/news';
  const data = await getNews({
   path,
   method:'GET'    
 })
setNewsList(data?.result)
scrollToTop()
} catch (error) {
  console.log(error)
}
}
  useEffect(()=>{
handleNewsList()
  },[])

  return (
    <div className="relative ">
      <HeaderAddSection banner={banner}/>
      {appLoading?<Loader/>:
        <div className="bg-white">
        <Header />
        <div className="m-4">
          <NavigationList />
        </div>
        <div className="">
          <div className="mt-4">
            {/* featured section */}
            <Hero newsList={newsList}/>
            {/* latest news sectin */}
            <div className="my-8">
              <LateatNews newsList={newsList}/>
            </div>
            <div>
              <LifeStyleSection/>
            </div>
          </div>
        </div>
      <Footer/>
      </div>}
    </div>
  );
};

export default Home;
