import React from "react";
import { useParams, Link } from "react-router-dom";

const EmailSent = () => {
  const params = useParams();
  const userEmail = params.userEmail;

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
        <div>
          <h1>Account Confirmation</h1>
          <h5 style={{ color: "gray" }}>
            An Email with your Account confirmation link has been sent to your
            email &nbsp;
            <span className="text-primary">
              <b>{userEmail}</b>
            </span>
          </h5>
          <h5 style={{ color: "gray" }}>
            Check your email and comeback to proceed !
          </h5>

          <Link
            to={`/login/${userEmail}`}
            className="btn btn-outline-primary mt-4 px-5"
          >
            Proceed
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmailSent;
