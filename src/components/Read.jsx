import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading, searchData } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {showPopup && (
        <CustomModel
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="text-center  fw-bold p-2">All Data</h2>
      <div className="d-flex justify-content-center align-items-center gap-2 pb-3">
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label text-primary fs-4">All</label>
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label text-primary fs-4">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label text-primary fs-4">Female</label>
      </div>
      <div className="cards-wrapper d-flex flex-row flex-wrap justify-content-center gap-3">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            }).filter((ele) => {
              if(radioData === "Male" ){
                return ele.gender === radioData;
              } else if(radioData === "Female" ){
                return ele.gender === radioData;
              }else{
                return ele;
              }
            })
            .map((ele) => (
              <div key={ele.id} className="card w-25 bg-primary-subtle">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-success">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.gender}</p>
                  <div>
                    <button
                      className="card-link bg-primary border-0 rounded-1 text-white fw-fw-semibold"
                      onClick={() => [setId(ele.id), setShowPopup(true)]}
                    >
                      View
                    </button>
                    <Link to={`/edit/${ele.id}`} className="card-link">
                      Edit
                    </Link>
                    <Link
                      onClick={() => dispatch(deleteUser(ele.id))}
                      className="card-link"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default Read;
