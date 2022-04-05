import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Products, Wishlist, Cart, NotFound } from "pages";

function RouteSwitch() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />} />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { RouteSwitch };
