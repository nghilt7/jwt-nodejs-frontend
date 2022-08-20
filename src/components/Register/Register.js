import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { registerNewUser } from "../../services/userService";

import "./Register.scss";

const Register = () => {
  useEffect(() => {
    // axios
    //   .get(`http://localhost:7070/api/v1/test-api`)
    //   .then((data) => console.log(">>> check data", data));
  }, []);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  let history = useHistory();

  const handleRegister = async () => {
    const check = isValidInputs();

    if (check) {
      let response = await registerNewUser(email, phone, username, password);
      let serverData = response.data;

      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        history.push("/login");
      } else {
        toast.error(serverData.EM);
      }
    }
  };

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    if (!email) {
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      toast.error("Email is required");
      return false;
    }

    let regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      toast.error("Email is not vailid");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!phone) {
      toast.error("Phone is required");
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Password and re-enter password is not correct");
      setObjCheckInput({
        ...defaultValidInput,
        isValidPassword: false,
        isValidConfirmPassword: false,
      });
      return false;
    }

    return true;
  };

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
              className={
                objCheckInput.isValidEmail
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              className={
                objCheckInput.isValidPhone
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              className={
                objCheckInput.isValidPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input
              type="password"
              className={
                objCheckInput.isValidConfirmPassword
                  ? "form-control"
                  : "form-control is-invalid"
              }
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <button
              className="btn btn-primary py-2"
              onClick={() => handleRegister()}
            >
              Register
            </button>
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
