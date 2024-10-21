import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

function Navbar() {
  const allUsers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(searchUser(searchData));
  },[searchData])
  console.log(searchData);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand text-white fw-fw-semibold">R.T.K</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link active text-white fw-fw-semibold"
                >
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link text-white fw-fw-semibold">
                  All Post ({allUsers.length})
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchData(e.target.value)}
              />
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
