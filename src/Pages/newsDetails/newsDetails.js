import React from "react";
import { useParams } from "react-router";
import dummyadd from "../../assets/gif-banner.gif";
import dummyImg from "../../assets/home-1.jpg";
import Layout from "../Layout/Layout";
import HeaderAddSection from "../components/addSection";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div className="">
      <HeaderAddSection banner={dummyadd} />
      <Layout>
  <div className=" bg-white">
  <div className="grid grid-cols-4 py-8">
          <div className="col-span-3 mx-4">
            <div className="">
              <h1 className="text-4xl font-semibold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit obcaecati voluptatum iusto recusandae ad suscipit.
              </h1>
              <div className="my-4">
                <h4>
                  Reported by <span>Stephen Alex</span>
                </h4>
                <p>
                  Published at <span>......</span>
                </p>
              </div>
            </div>

            <img src={dummyImg} alt="" className="max-h-96" />
            <div>
              <p className="leading-loose my-8 text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
                dignissimos minus architecto earum rem temporibus debitis
                magnam, cupiditate doloremque nobis provident omnis iste
                voluptas quaerat eius fugiat exercitationem libero ipsam.
                Dolore, maiores. A magnam reiciendis, beatae tempora laudantium
                itaque officia mollitia ducimus expedita fugit, nisi rem in
                natus, quidem ipsum delectus laboriosam exercitationem possimus?
                Similique amet ipsam fugiat blanditiis veniam esse, error
                commodi cumque. Debitis ut fuga doloremque recusandae labore
                eius optio voluptatem perspiciatis, corrupti deleniti fugiat
                nostrum a velit laborum odio quod molestias omnis, reprehenderit
                architecto quidem quo nobis maiores saepe. Et, pariatur quam
                quae veritatis magnam nostrum animi nobis eaque fugit dolor ab
                molestiae corporis officia voluptate placeat molestias porro
                reprehenderit dignissimos saepe distinctio officiis soluta ad!
                Nam, quis pariatur omnis sapiente quam eum repudiandae enim
                tempore. Fuga, culpa. Veritatis, numquam dolores libero
                voluptate in vero error nisi unde eos! Ipsum iste sint
                repudiandae maxime, inventore recusandae aspernatur sunt
                pariatur iusto nam? Velit optio quo accusantium amet. Quod harum
                consectetur illo tenetur beatae unde modi, sunt id vel. Saepe
                odio, rerum impedit atque quo blanditiis, architecto magni
                mollitia reprehenderit magnam aspernatur perferendis natus iste
                alias maxime fuga soluta est! Exercitationem enim beatae
                assumenda sint, impedit nesciunt, minima quia delectus iusto ea
                pariatur natus at, animi similique corrupti in rem officia eius
                repellat veritatis! Voluptas incidunt laborum quisquam quia
                iusto culpa debitis ratione nemo autem quod quos at laboriosam
                totam laudantium magni assumenda cumque aspernatur voluptatum,
                officiis est! Corporis dolorum ratione excepturi sint tempora,
                cupiditate harum unde est porro.
              </p>
            </div>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
          </div>
        </div>
        <div className="mx-8">
          <h3 className=" text-xl sport-section font-semibold py-2 text-red-800">
            Related News
          </h3>
          <hr className="sport-border w-24 border-2 mb-4 border-red-800" />
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 my-8">
          <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
            <div className="">
              <img src={dummyImg} alt="" />
              <h1 className="text-lg my-2 font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores animi quis debitis at, non a.
              </h1>
            </div>
          </div>
        </div>
  </div>
      </Layout>
    </div>
  );
};
export default NewsDetails;
