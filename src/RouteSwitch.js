import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Products, Wishlist, Cart } from "pages";

function RouteSwitch() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export { RouteSwitch };
