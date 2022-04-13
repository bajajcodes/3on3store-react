import "./auth.css";
import { AuthHeader } from "./header/header.js";
import { AuthAsideImage } from "./aside/aside.js";
import { AuthLogin, AuthSignup } from "./main/index.js";
import { authInfo } from "data";

// TODO: make these components import dynamic
function Login() {

  return (
    <div className="auth">
      <AuthHeader authInfo={authInfo.login} />
      <AuthLogin />
      <AuthAsideImage asideImage={authInfo.login.asideLoginImage} />
    </div>
  );
}

function Signup() {
  return (
    <div className="auth">
      <AuthHeader authInfo={authInfo.signup} />
      <AuthSignup />
      <AuthAsideImage asideImage={authInfo.signup.asideSignupImage} />
    </div>
  );
}

export { Login, Signup };
