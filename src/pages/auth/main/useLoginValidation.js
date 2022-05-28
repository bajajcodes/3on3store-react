import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext, useAlert } from "context";
import { getUserLogin } from "./main.helper";

export function useLoginValidation() {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { authDispatch } = useAuthContext();
  const { alertDispatch, showAlert, hideAlert } = useAlert();
  const location = useLocation();
  const navigate = useNavigate();

  function loginHandler(loggedIn, info) {
    if (loggedIn) {
      authDispatch({
        type: "LOGIN",
      });
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    } else if (loggedIn === false) {
      showAlert(alertDispatch, "Login Failed", info.message,"danger");
      hideAlert(alertDispatch);
    }
  }

  async function loginClickHandler(event) {
    event.preventDefault();

    const { loggedIn, info } = await getUserLogin({ _email, _password });

    setEmail("");
    setPassword("");

    loginHandler(loggedIn, info);
  }

  async function fillTestLoginCredentials(event) {
    event.preventDefault();
    setEmail("shubham@bajaj.com");
    setPassword("shubhambajaj");
  }

  return [
    _email,
    _password,
    setEmail,
    setPassword,
    loginClickHandler,
    fillTestLoginCredentials,
  ];
}
