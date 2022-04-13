import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "context";
import { getUserLogin } from "./main.helper";

export function useLoginValidation(setAlertInfo) {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { authDispatch } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  function loginHandler(loggedIn, setAlertInfo, info) {
    if (loggedIn) {
      authDispatch({
        type: "LOGIN"
      });
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    } else if (loggedIn === false) {
      setAlertInfo(info);
      setTimeout(
        () => setAlertInfo((prev) => ({
          ...prev,
          display: !prev.display,
          message: ""
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

    loginHandler(loggedIn, setAlertInfo, info);
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
