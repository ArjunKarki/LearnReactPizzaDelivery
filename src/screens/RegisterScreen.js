import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/authActions";
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const dispatch = useDispatch();

  const { user, error, isLoading } = useSelector((state) => state.auth);

  const onRegister = () => {
    if (!email || !name || !password || !cpassword) {
      alert("Pleased fill the form");
    } else if (password !== cpassword) {
      alert("Password do not match !");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 shadow-lg p-4 mb-5 bg-body rounded">
          <h2 style={{ fontSize: "50px", textAlign: "start" }}>Register</h2>
          <div className="text-start mt-3">
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="form-control"
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            {isLoading ? (
              <div class="mt-2 spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button onClick={onRegister} className="btn mt-2 mb-3">
                Register
              </button>
            )}
            <br />
            <Link style={{ fontSize: "20px" }} to="/login">
              Click here to Login .
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
