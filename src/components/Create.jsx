import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Create() {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Users", users); 
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>
    <h2 className="text-center text-primary mt-2">Fill The data</h2>
      <form
        className="w-50 mx-auto my-4 bg-danger-subtle p-5 rounded-3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name" 
            id="name" 
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email" 
            id="email" 
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age" 
            id="age"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="Male"
            onChange={getUserData}
          />
          <label className="form-check-label ms-2" htmlFor="male">
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
            onChange={getUserData}
          />
          <label className="form-check-label ms-2" htmlFor="female">
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

export default Create;
