import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Products,
  Wishlist,
  Cart,
  NotFound,
  Product,
  Profile,
  Account,
  Addressess,
} from "pages";
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
        <Route path="/category" element={<Products />}>
          <Route path="social" element={<Products />} />
          <Route path="strength" element={<Products />} />
          <Route path="intelligence" element={<Products />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
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
        <Route
          path="/account"
          element={
            <RequiresAuth>
              <Account />
            </RequiresAuth>
          }
        >
          <Route index element={<Profile />} />
          <Route
            path="/account/profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="/account/addressess"
            element={
              <RequiresAuth>
                <Addressess />
              </RequiresAuth>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export { RouteSwitch };
