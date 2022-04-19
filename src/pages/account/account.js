import "./account.styles.css";
import { Header, Footer } from "components";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function getUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo"));
}

function Account() {
  const [isNavFullLength, setIsNavFullLength] = useState(false);
  const userInfo = getUserInfo();

  //@TODO: This says I dont understand "this"
  function getItem(item) {
    return userInfo[item] ?? "- not added -";
  }

  function isNavFullLengthToggler() {
    if(window.innerWidth <= 768){
      setIsNavFullLength((prev) => !prev);
    }
  }

  return (
    <div className="account-page-container">
      <Header />
      <main className="profile-main">
        <div className="profile-meta-info">
          <h2>Account</h2>
          <p>
            {getItem("firstName")} {getItem("lastName")}
          </p>
        </div>
        <section className="section-main">
          <aside
            className={`profile-aside ${
              isNavFullLength ? "profile-aside-fl " : ""
            }`}
          >
            <div
              className={`profile-section-def ${
                isNavFullLength ? "profile-section-def-fl" : ""
              }`}
            >
              <button
                className="btn btn-secondary bg-grey btn-def"
                onClick={() => isNavFullLengthToggler()}
              >
                <span className="material-icons">account_circle</span>
                <span>Account</span>
              </button>
            </div>
            <nav
              className={`profile-nav ${
                isNavFullLength ? "profile-nav-fl" : ""
              }`}
            >
              <ul
                className={`profile-list ${
                  isNavFullLength ? "profile-list-fl" : ""
                }`}
              >
                <li className="profile-list-item profile-list-item-first">
                  Account
                </li>
                <li className="profile-list-item">
                  <NavLink
                    onClick={() => isNavFullLengthToggler()}
                    to="/account/profile"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--logo-color)" : "",
                      };
                    }}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="profile-list-item">
                  <NavLink
                    onClick={() => isNavFullLengthToggler()}
                    to="/account/addressess"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--logo-color)" : "",
                      };
                    }}
                  >
                    Addresses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { Account };
