import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  togglePasswordVisibilityIcon,
  togglePasswordInputType,
  getUserSignup,
} from "./main.helper";
import { useAuthContext, useAlert } from "context";

export function useSignupValidation() {
  const [formFields, setFormFields] = useState({
    _firstName: "",
    _lastName: "",
    _email: "",
    _password: "",
    _confirmPassword: "",
  });

  const [passwordFieldsIconsToggle, setPasswordFieldsIconsToggle] = useState({
    passwordIcon: "visibility_off",
    passwordType: "password",
    confirmPasswordIcon: "visibility_off",
    confirmPasswordType: "password",
  });
  const navigate = useNavigate();
  const { authDispatch } = useAuthContext();
  const { alertDispatch, showAlert, hideAlert } = useAlert();
  const location = useLocation();

  function handleChange(event) {
    const value = event.target.value;
    setFormFields({
      ...formFields,
      [event.target.name]: value,
    });
  }

  function handlePasswordIconsClick(event) {
    const name = event.target.getAttribute("datainputtypename");
    const type = event.target.getAttribute("dataiconname");

    setPasswordFieldsIconsToggle({
      ...passwordFieldsIconsToggle,
      [name]: togglePasswordVisibilityIcon(passwordFieldsIconsToggle[name]),
      [type]: togglePasswordInputType(passwordFieldsIconsToggle[type]),
    });
  }

  async function signupClickHandler(event) {
    event.preventDefault();

    if (formFields["_password"] !== formFields["_confirmPassword"]) {
      showAlert(
        alertDispatch,
        "Input Passwords",
        "Passwords do not match",
        "danger"
      );
      hideAlert(alertDispatch);
    } else if (
      (formFields["_password"].length === 0 ||
        formFields["_confirmPassword"].length === 0) &&
      formFields["_lastName"].length
    ) {
      showAlert(
        alertDispatch,
        "Input Passwords",
        "Passowrds are invalid.",
        "danger"
      );
      hideAlert(alertDispatch);
    } else if (formFields["_password"] === formFields["_confirmPassword"]) {
      const { isSignuped, info } = await getUserSignup(formFields);

      setFormFields((prev) => ({
        _firstName: "",
        _lastName: "",
        _email: "",
        _password: "",
        _confirmPassword: "",
      }));

      if (isSignuped) {
        authDispatch({
          type: "LOGIN",
        });
        const from = location.state?.from || "/";
        navigate(from, { replace: true });
      } else if (isSignuped === false) {
        showAlert(alertDispatch, "Signup Failed", info.message, "danger");
        hideAlert(alertDispatch);
      }
    }
  }

  return [
    formFields,
    passwordFieldsIconsToggle,
    signupClickHandler,
    handlePasswordIconsClick,
    handleChange,
  ];
}
