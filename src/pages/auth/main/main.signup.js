import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  togglePasswordVisibilityIcon,
  togglePasswordInputType,
  getUserSignup,
} from "./main.helper";
import { ErrorAlert } from "../alert/alert";
import { useAuthContext } from "context";

function AuthSignup() {
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

  const [alertInfo, setAlertInfo] = useState({ display: false, message: "" });
  const navigate = useNavigate();
  const { authDispatch } = useAuthContext();
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
      setAlertInfo({
        display: true,
        message: "Passwords do not match",
      });
      setTimeout(
        () =>
          setAlertInfo((prev) => ({
            ...prev,
            display: !prev.display,
            message: "",
          })),
        3000
      );
    } else if (
      (formFields["_password"].length === 0 ||
        formFields["_confirmPassword"].length === 0) &&
      formFields["_lastName"].length
    ) {
      setAlertInfo({
        display: true,
        message: "Check Passwords.",
      });
      setTimeout(
        () =>
          setAlertInfo((prev) => ({
            ...prev,
            display: !prev.display,
            message: "",
          })),
        3000
      );
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
        const from = location.state?.from;
        navigate(from, { replace: true });
      } else if (isSignuped === false) {
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
            name="_email"
            value={formFields._email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">First Name</span>
          <input
            type="text"
            className="auth-input"
            name="_firstName"
            value={formFields._firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">Last Name</span>
          <input
            type="text"
            className="auth-input"
            name="_lastName"
            value={formFields._lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <div className="dflex">
            <span className="input-group-text">Password</span>
            <Link to="#">
              <span
                className="material-icons"
                datainputtypename="passwordIcon"
                dataiconname="passwordType"
                onClick={(e) => handlePasswordIconsClick(e)}
              >
                {passwordFieldsIconsToggle.passwordIcon}
              </span>
            </Link>
          </div>
          <input
            type={passwordFieldsIconsToggle.passwordType}
            className="auth-input"
            name="_password"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <div className="dflex">
            <span className="input-group-text">Confirm Password</span>
            <Link to="#">
              <span
                className="material-icons"
                datainputtypename="confirmPasswordIcon"
                dataiconname="confirmPasswordType"
                value={formFields._password}
                onClick={(e) => handlePasswordIconsClick(e)}
              >
                {passwordFieldsIconsToggle.confirmPasswordIcon}
              </span>
            </Link>
          </div>
          <input
            type={passwordFieldsIconsToggle.confirmPasswordType}
            className="auth-input"
            name="_confirmPassword"
            value={formFields._confirmPassword}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          className="btn btn-secondary"
          onClick={(e) => signupClickHandler(e)}
        >
          Signup
        </button>
      </form>
    </main>
  );
}

export { AuthSignup };
