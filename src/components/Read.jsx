import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading } = useSelector((state) => state.app);
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
      <h2 className="text-center text-info fw-bold p-2">All Data</h2>
      <div className="cards-wrapper d-flex flex-row flex-wrap justify-content-center gap-3">
        {users &&
          users.map((ele) => (
            <div key={ele.id} className="card w-25 bg-primary-subtle">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {ele.email}
                </h6>
                <p className="card-text">{ele.gender}</p>
                <div>
                  <button
                    className="card-link bg-primary border-0 rounded-1 "
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link href="#" className="card-link">
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
