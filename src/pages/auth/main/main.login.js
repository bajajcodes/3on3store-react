import { Link } from "react-router-dom";
import { useState } from "react";
import { ErrorAlert } from "../alert/alert";
import { useLoginValidation } from "./useLoginValidation";

function AuthLogin() {
  const [alertInfo, setAlertInfo] = useState({ display: false, message: "" });
  const [
    _email,
    _password,
    setEmail,
    setPassword,
    loginClickHandler,
    fillTestLoginCredentials,
  ] = useLoginValidation(setAlertInfo);


  return (
    <main className="auth-main">
      <ErrorAlert
        message={alertInfo.message}
        displayValue={alertInfo.display}
      />

      <form className="dgrid-section">
        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">Email</span>
          <input
            type="text"
            className="auth-input"
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <div className="dflex">
            <span className="input-group-text">Password</span>
            <span className="input-group-text text-decoration-underline">
              <Link to="#"> Forgot your password? </Link>
            </span>
          </div>
          <input
            type="password"
            className="auth-input"
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-secondary"
          onClick={(e) => loginClickHandler(e)}
        >
          Login
        </button>
        <button
          className="btn btn-secondary"
          onClick={fillTestLoginCredentials}
        >
          Fill Test Login Credentials
        </button>
      </form>
    </main>
  );
}

export { AuthLogin };
