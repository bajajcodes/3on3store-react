import "./auth.css";
import { AuthHeader } from "./header/header.js";
import { AuthAsideImage } from "./aside/aside.js";
import { AuthLogin, AuthSignup } from "./main/main.js";

// TODO: make these components import dynamic
function Login() {
  return (
    <div className="auth">
      <AuthHeader/>
      <AuthLogin />
      <AuthAsideImage/>
    </div>
  );
}

function Signup() {
  return (
    <div className="auth">
      <AuthHeader />
      <AuthSignup />
      <AuthAsideImage />
    </div>
  );
}

export { Login, Signup };
