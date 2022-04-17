import { Link } from "react-router-dom";
import {useSignupValidation} from "./useSignupValidation";

function AuthSignup() {

  const [
    formFields,
    passwordFieldsIconsToggle,
    signupClickHandler,
    handlePasswordIconsClick,
    handleChange,
  ] = useSignupValidation();

  return (
    <main className="auth-main">
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
