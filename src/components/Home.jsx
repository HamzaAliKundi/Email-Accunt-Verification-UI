import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="d-flex w-100 d-flex justify-content-center">
          <Link className="btn btn-primary px-5 mx-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-primary px-5 mx-2" to="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
