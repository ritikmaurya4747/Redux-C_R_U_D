import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";

function Read() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(showUser());
  }, []);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <CustomModel />
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
                  <a href="#" className="card-link">
                    View
                  </a>
                  <a href="#" className="card-link">
                    Edit
                  </a>
                  <a href="#" className="card-link">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Read;
