import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contextProvider/useAppcontext";
import { useRequest } from "../../utilis/apiRequest";
import Loader from "../loader/Loader";

const CommonCategory = ({category}) => {
    const { appLoading,scrollToTop } = useAppContext();
  const [newsList,setNewsList]=useState([]);
  const [subCategory,setSubCategory] = useState([])
  const [getNews] = useRequest()
  const handlePoliticalNews=async()=>{
    try {
      const path = `public/news/${category}`;
      const result = await getNews({
       path,
       method:'GET' ,   
     })
     setNewsList(result.news)
      setSubCategory(result.sub_categories)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    handlePoliticalNews()
    scrollToTop()
  },[])
  
  return (
<div>
{appLoading?<Loader/>:<div>
    <div className="md:ml-24 my-2 text-sm mx-auto">
    {
  subCategory.length&& subCategory.map(topic=>(
    <p className="uppercase cursor-pointer">{topic}</p>
  ))
}
    </div>
      <div className="w-3/4 mx-auto">
     <div className="shadow-sm p-4">
     {newsList.length?
        <div className="cursor-pointer">
          <img src={newsList[0]?.photos[0]} alt="" className=" mx-auto"/>
          <h1 className="text-xl font-medium text-center">
            {
              newsList[0].title
            }
          </h1>
        </div>:<div>
No news right now
        </div>}
     </div>
        <div className="news-link-section">
            {
              newsList.length&&newsList.map(news=>(
                <p>{news.title}</p>
              ))
            }
          </div>
      </div>
</div>}
</div>
  );
};
export default CommonCategory;
