import "./auth.css";
import { AuthHeader } from "./header/header.js";
import { AuthAsideImage } from "./aside/aside.js";
import {AuthLogin, AuthSignup} from "./main/main.js";
import {data} from "../../data";

function Login() {
  return (
    <div className="auth">
      <AuthHeader headerInfo={data.headerInfo.login} logoImage={data.logoImage} ecommerceName={data.ecommerceName}/>
      <AuthLogin />
      <AuthAsideImage asideImage={data.asideImages.asideLoginImage} />
    </div>
  );
}

function Signup() {
  return (
    <div className="auth">
      <AuthHeader headerInfo={data.headerInfo.signup} logoImage={data.logoImage} ecommerceName={data.ecommerceName}/>
      <AuthSignup />
      <AuthAsideImage  asideImage={data.asideImages.asideSignupImage}/>
    </div>
  );
}

export { Login, Signup };
