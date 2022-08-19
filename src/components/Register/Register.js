import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Register.scss";

const Register = () => {
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=2`)
      .then((data) => console.log(">>> check data", data));
  }, []);

  return (
    <div className="register-container">
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
              placeholder="Email address"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Re-enter password"
            />
            <button className="btn btn-primary py-2">Register</button>
            <hr />
            <div className="text-center">
              <Link to="/login" className="btn btn-success py-2">
                Already've an account. Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
