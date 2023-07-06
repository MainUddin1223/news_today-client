import React from "react";
import { useParams } from "react-router";
import Layout from "../Layout/Layout";

const NewsDetails = ()=>{
    const {id} = useParams();
    console.log(id)
    return(
        <div>
            <Layout>
                <div className="grid grid-cols-4">
                    <div className="col-span-3">
                        <h1>This is main section</h1>
                    </div>
                    <div>
                        <h1>This is side bar</h1>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default NewsDetails