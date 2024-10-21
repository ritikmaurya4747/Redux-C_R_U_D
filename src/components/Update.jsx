import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app.users);
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  return (
    <div>
      <h2 className="text-center mt-2">Edit The data</h2>
      <form className="w-50 mx-auto my-4 bg-danger-subtle p-5 rounded-3">
        <div className="mb-4">
          <label className="form-label" >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={updateData && updateData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={updateData && updateData.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" >
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="age"
            value={updateData && updateData.age}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="Male"
            checked={updateData && updateData.gender === "Male"}
          />
          <label className="form-check-label ms-2" >
            Male
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="Female"
            checked={ updateData && updateData.gender === "Female"}
          />
          <label className="form-check-label ms-2">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
