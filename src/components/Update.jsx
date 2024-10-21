import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);
  console.log(updateData);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read")

  }

  return (
    <div>
      <h2 className="text-center mt-2">Edit The data</h2>
      <form
        className="w-50 mx-auto my-4 bg-danger-subtle p-5 rounded-3"
        onSubmit={handleUpdate}
      >
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="age"
            value={updateData && updateData.age}
            onChange={newData}
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
            onChange={newData}
          />
          <label className="form-check-label ms-2">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value="Female"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label ms-2">Female</label>
        </div>

        <button type="submit" className="btn btn-danger">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
