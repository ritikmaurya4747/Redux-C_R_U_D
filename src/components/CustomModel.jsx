import React from "react";
import "./CustomModel.css";
import { useSelector } from "react-redux";
function CustomModel({ id, showPopup, setShowPopup }) {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer w-auto h-auto p-3">
        <button
          onClick={() => setShowPopup(false)}
          className="bg-primary border-0 rounded-1 w-25 mx-auto d-block text-white fw-semibold" style={{ height: "40px" }}
        >
          {" "}
          Close
        </button> <hr />
        <h2>{singleUser[0].name}</h2>
        <h2 className="text-danger" >{singleUser[0].email}</h2>
        <h2>{singleUser[0].age}</h2>
        <h2 className="text-warning" >{singleUser[0].gender}</h2>
      </div>
    </div>
  );
}

export default CustomModel;
