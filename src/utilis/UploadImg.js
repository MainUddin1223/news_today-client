import React, { useEffect, useRef } from "react";

const UploadImg = ({ setReportForm, reportForm }) => {
  const images = [];
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dld6ete1x",
        uploadPreset: "orz0h6jl",
        multiple: true,
        maxFiles: 2,
      },
      function (error, result) {
        if (result && result.event === "queues-end") {
          result.info.files.map((info) => images.push(info.uploadInfo.url));
          setReportForm((prev) => ({
            ...reportForm,
            photos: images,
          }));
        }
      }
    );
  }, []);
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          widgetRef.current.open();
        }}
        className="block uppercase tracking-widetext-xs font-bold  m-3 my-4 bg-red-800 rounded text-white p-2 "
      >
        Choose a Photo
      </button>
    </div>
  );
};
export default UploadImg;
