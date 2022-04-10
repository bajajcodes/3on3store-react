import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Products, Wishlist, Cart, NotFound } from "pages";
import { RequiresAuth } from "./RequiresAuth";
import { CheckAuth } from "./CheckAuth";

function RouteSwitch() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuth>
              <Signup />
            </CheckAuth>
          }
        />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />} />
        </Route>
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/profile" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { RouteSwitch };
