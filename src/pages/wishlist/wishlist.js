import { Header, Footer } from "components/index";
import { Main } from "./main/main";
import "pages/products/products.css";
import "./wishlist.css";
import { useAuthContext } from "context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Wishlist() {
  const {
    authState: { loginStatus },
  } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === false) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="wishlist products-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { Wishlist };
