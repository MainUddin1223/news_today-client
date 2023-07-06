import React from "react";

const HeaderAddSection = ({banner})=>{
    return (
        <div className="h-48 w-3/4 flex items-center mx-auto sticky top-0 -z-10">
        <img src={banner} alt="" className="w-full h-44 " />
      </div>
    )
}
export default HeaderAddSection