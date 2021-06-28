import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../actions/authActions";
import Error from "../components/Error";
function LoginScreen() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(loginUser({ email, password, history }));
  };
  const { isLoading, user, error } = useSelector((state) => state.auth);
  return (
    <div className="row justify-content-center ">
      <div className="col-md-5 text-start mt-5 shadow-lg p-3 mb-5 bg-body rounded p-5">
        {error && <Error message={error} />}
        <h2>LOGIN</h2>
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
            className="form-control"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="form-control"
          />
          {isLoading ? (
            <div class="mt-2 spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button onClick={onLogin} className="btn mt-3 mb-3">
              LOGIN
            </button>
          )}

          <br />
          <Link style={{ fontSize: "20px" }} to="/register">
            Click here Register Here.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
