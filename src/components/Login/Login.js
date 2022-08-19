import { Link } from "react-router-dom";

import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-0 ">
          <div className="content-left col-12 col-sm-7 d-none d-sm-block  ">
            <div className="brand">Tannghi</div>
            <div className="detail">
              Welcome to tannghi company, we happy to see you here
            </div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 ">
            <div className="brand d-sm-none text-center">Tannghi</div>

            <input
              type="text"
              className="form-control"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary py-2">Login</button>
            <span className="text-center">
              <Link className="forgot-password" to="#">
                Forgot your password?
              </Link>
            </span>
            <hr />
            <div className="text-center">
              <Link to="/register" className="btn btn-success py-2">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
