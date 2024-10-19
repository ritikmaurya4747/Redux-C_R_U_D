import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

function Create() {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Users", users); // This should now log name and email
    dispatch(createUser(users));
  };

  return (
    <div>
      <form
        className="w-50 mx-auto my-5 bg-danger-subtle p-5 rounded-3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name" // Added name attribute
            id="name" // Added id for better association with label
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
            name="email" // Added name attribute
            id="email" // Added id for better association with label
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
            name="age" // Added name attribute
            id="age" // Added id for better association with label
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value="male"
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
            value="female"
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
