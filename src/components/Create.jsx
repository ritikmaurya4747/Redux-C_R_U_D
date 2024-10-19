import React from "react";

function Create() {
  return (
    <div>
      <form className="w-50 mx-auto my-5 bg-danger-subtle p-5 rounded-3">
        <div className="mb-4">
          <label className="form-label">Name</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
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
