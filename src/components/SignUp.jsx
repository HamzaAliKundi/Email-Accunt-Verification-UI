import React, { useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../APIs/APIs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ hostory }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post(`${baseUrl}/user/signup`, userObj)
      .then((res) => {
        if (res.data.status === "PENDING") {
          navigate(`/emailsent/${email}`);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 400) {
          setError(err.response.data.message);
        }
      });
  };
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
          <h3 className="py-3">Register Here</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                autoFocus
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="text-danger">{error}</span>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="btn mt-4 px-5 btn-outline-primary">
              Sign Up
            </button>

            <div className="mt-3">
              <span>
                <span>Already have an account ?</span>
                <Link
                  to="/login"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  <b> Login</b>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
