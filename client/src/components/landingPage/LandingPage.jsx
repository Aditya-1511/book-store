import React from "react";
import "./landingPage.css";

function LandingPage() {
  return (
    <>
      <div className="container bg-warning mt-4">
        <div class="jumbotron">
          <div className="book-image">
            <img
              className="book-pic"
              src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_960_720.jpg"
              alt=""
            />
          </div>
          <div className="text-content">
            <h2>Library Management System</h2>
            <h4>The sole system you need</h4>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#link" role="button">
                Get Started
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
