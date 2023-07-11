import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../APIs/APIs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const param = useParams();
  const userEmail = param.userEmail;

  useEffect(() => {
    setEmail(userEmail);
  }, [userEmail]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const userObj = {
      email: email,
      password: password,
    };
    await axios
      .post(`${baseUrl}/user/signin`, userObj)
      .then((res) => {
        console.log("res : ", res);
        if (res.data.status === "Success") {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log("Err", err);
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
          <h3 className="py-3">Login In</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-gorup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                autoFocus
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-gorup mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="text-danger">{error}</span>
            </div>

            <button className="btn mt-4 px-5 btn-outline-primary">Login</button>

            <div className="mt-3">
              <span>
                <span>Don't have account ?</span>
                <Link
                  to="/signup"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  <b> Signup</b>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
