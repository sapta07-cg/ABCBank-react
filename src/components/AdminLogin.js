import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppNavBar } from "../common/AppNavBar";
import { AdminLoginAction } from "../redux/AdminLoginReducer";

export function AdminLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  const AdminLoginFunction = () => {
    dispatch(
      AdminLoginAction({
        email,
        password,
      })
    );

    setErrorOperation(true);
    setTimeout(() => setErrorOperation(false), 5000);

    console.log(email, password);
    console.log(state.email, state.password);
  };

  if (state.AdminLogin.loginAction === true) {
    history.push("/admin");

    return <div></div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary">Admin Login</h3>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Email"
            required="required"
            onChange={(e) => updateEmail(e)}
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Enter Password"
            required="required"
            onChange={(e) => updatePassword(e)}
          />
          <input
            type="button"
            className="btn btn-outline-dark w-100"
            value="Login"
            onClick={() => AdminLoginFunction()}
          />
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
