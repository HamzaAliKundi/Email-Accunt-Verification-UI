import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div
        className="container"
        style={{
          minHeight: "98vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <h1>Welcome</h1>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
