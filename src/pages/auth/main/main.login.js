import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "context";
import { ErrorAlert } from "../alert/alert";
import { getUserLogin } from "./main.helper";

function AuthLogin() {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const [alertInfo, setAlertInfo] = useState({ display: false, message: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const { authDispatch } = useAuthContext();

  function loginHandler(loggedIn, authDispatch, setAlertInfo, info) {
    if (loggedIn) {
      authDispatch({
        type: "LOGIN",
      });
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    } else if (loggedIn === false) {
      setAlertInfo(info);
      setTimeout(
        () =>
          setAlertInfo((prev) => ({
            ...prev,
            display: !prev.display,
            message: "",
          })),
        3000
      );
    }
  }

  async function loginClickHandler(event) {
    event.preventDefault();

    const { loggedIn, info } = await getUserLogin({ _email, _password });

    setEmail("");
    setPassword("");

    loginHandler(loggedIn, authDispatch, setAlertInfo, info);
  }

  async function fillTestLoginCredentials(event) {
    event.preventDefault();
    setEmail("shubham@bajaj.com");
    setPassword("shubhambajaj");
  }

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
