import React from "react";
import './CustomModel.css'
import { useSelector } from "react-redux";
function CustomModel({id,showPopup,setShowPopup}) {
    const allUsers = useSelector((state) => state.app.users);
    const singleUser = allUsers.filter((ele)=> ele.id === id)
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button>Close</button>
        <h2>{singleUser[0].name}</h2>
      </div>
    </div>
  );
}

export default CustomModel;
