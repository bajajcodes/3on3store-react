import { Link } from "react-router-dom";
import { useState } from "react";

function AuthSignup() {
  const [passwordInput, setPasswordInput] = useState({
    visibility: "visibility",
    type: "password",
  });

  const [confirmPasswordInput, setconfirmPasswordInput] = useState({
    visibility: "visibility",
    type: "password",
  });

  function togglePasswordVisibilityIcon(prev) {
    return prev === "visibility" ? "visibility_off" : "visibility";
  }

  function togglePasswordInputType(prev) {
    return prev === "password" ? "text" : "password";
  }

  function togglePasswordInputHandlers(name) {
    if (name === "password") {
      setPasswordInput((prev) => ({
        ...prev,
        visibility: togglePasswordVisibilityIcon(prev.visibility),
        type: togglePasswordInputType(prev.type),
      }));
    } else {
      setconfirmPasswordInput((prev) => ({
        ...prev,
        visibility: togglePasswordVisibilityIcon(prev.visibility),
        type: togglePasswordInputType(prev.type),
      }));
    }
  }

  return (
    <main className="main">
      <form className="dgrid-section">
        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">Email</span>
          <input type="text" className="input" />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">First Name</span>
          <input type="text" className="input" />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <span className="input-group-text">Last Name</span>
          <input type="text" className="input" />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <div className="dflex">
            <span className="input-group-text">Password</span>
            <Link to="#">
              <span
                className="material-icons"
                onClick={() => togglePasswordInputHandlers("password")}
              >
                {" "}
                {passwordInput.visibility}{" "}
              </span>
            </Link>
          </div>
          <input type={passwordInput.type} className="input" />
        </div>

        <div className="flex-nowrap input-group dgrid-fieldset">
          <div className="dflex">
            <span className="input-group-text">Confirm Password</span>
            <Link to="#">
              <span
                className="material-icons"
                onClick={() => togglePasswordInputHandlers("confirmPassword")}
              >
                {" "}
                {confirmPasswordInput.visibility}{" "}
              </span>
            </Link>
          </div>
          <input type={confirmPasswordInput.type} className="input" />
        </div>

        <button className="btn btn-secondary"> Signup </button>
      </form>
    </main>
  );
}

export { AuthSignup };
