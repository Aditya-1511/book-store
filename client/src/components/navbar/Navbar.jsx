import React from "react";
import { IoBookOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-flex justify-content-around align-items-center">
        <a className="navbar-brand text-light" href="#link">
          Book Store &nbsp; <IoBookOutline />
        </a>
        <div>
          <button className="btn btn-warning" type="submit">
            Register
          </button>{" "}
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
