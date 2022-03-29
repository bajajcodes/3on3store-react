import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import "../products/products.css";
import "./cart.styles.css";
import {useAuthContext} from "context";
import {useNavigate} from "react-router-dom";
import { useEffect } from "react";

function Cart() {
  const {authState: {loginStatus}} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
      if(loginStatus === false){
        navigate("/login");
      }
  }, []);

  return (
    <div className="cart products-wrapper">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export { Cart };
