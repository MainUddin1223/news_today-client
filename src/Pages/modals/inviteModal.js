import React, { useEffect, useState } from "react";
import { useAppContext } from "../../contextProvider/useAppcontext";
import { useRequest } from "../../utilis/apiRequest";
import "./Modal.css";

const InviteModal = () => {
  const { setIsInviteModal } = useAppContext();
  const [inviteForRole]= useRequest()

  const [invitationData, setInvitationData] = useState({
    email:'static@gmail.com',
    role: "editor",
    category: "politics",
    sub_category: [],
  });
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleInvite=async()=>{
const path = 'admin/invitation';
    const result = await inviteForRole({
        body:invitationData,
        path,
        method:'PUT'    
      })
      console.log(result)
    setIsInviteModal(false);
  }
  return (
    <>
      <div
        className="modal-wrapper"
        onClick={() => {
          setIsInviteModal(false);
        }}
      ></div>
      <div className="modal-container w-1/2">
        <h1 className="text-2xl text-center">Invite for a role</h1>
        <div>
          <p>Email</p>
          <input
            type="email"
            value={"thisisstatic@gmail.com"}
            readOnly
            className="border border-gray-300 rounded-sm px-2"
          />
        </div>
        <div>
          <p>Select a role</p>

          <select
            name="role"
            id="role"
            className="border border-gray-300 rounded-sm px-2 w-full"
            onChange={(e) => {
                setInvitationData((prev) => ({
                  ...prev,
                  role: e.target.value,
                }));
              }}
          >
            <option value="editor">Editor</option>
            <option value="sub-editor">Sub Editor</option>
            <option value="reporter">Reporter</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <p>Select a category</p>{" "}
          <select
            name="category"
            id="category"
            className="border border-gray-300 rounded-sm px-2 w-full"
            onChange={(e) => {
              setInvitationData((prev) => ({
                ...prev,
                category: e.target.value,
              }));
            }}
          >
            <option value="politics">Politics</option>
            <option value="tech">Tech</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="low&order">Low & Order</option>
            <option value="entertainment">Entertainment</option>
            <option value="super">Super</option>
          </select>
        </div>
        <div>
          <p>Select a Sub-category</p>

          <select
            name="sub-category"
            id="sub-category"
            className="border border-gray-300 rounded-sm px-2 w-full"
            onChange={(e) => {
                setInvitationData((prev) => ({
                  ...prev,
                  sub_category:[ e.target.value],
                }));
              }}
          >
            {invitationData?.category === "politics" ? (
              <>
                <option value="international">International</option>
                <option value="national">National</option>
                <option value="geo">GEO Politics</option>
              </>
            ) : invitationData?.category === "sports" ? (
              <>
                <option value="football">Football</option>
                <option value="cricket">Cricket</option>
                <option value="basketball">Basketball</option>
              </>
            ) : (
              <>
              </>
            )}
          </select>
        </div>
       <div className="flex justify-center gap-4 py-4">
       <button
          onClick={handleInvite}
          className="bg-red-800 py-1 px-8 rounded font-semibold text-white"
        >
          Invite
        </button>
        <button
          onClick={() => {
            setIsInviteModal(false);
          }}
          className="bg-red-800 py-1 px-8 rounded font-semibold text-white"
        >
          Close
        </button>
       </div>
      </div>
    </>
  );
};
export default InviteModal;
