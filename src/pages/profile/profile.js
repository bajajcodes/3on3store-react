import "./profile.styles.css";
import { Header, Footer } from "components";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function getUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo"));
}

function Profile() {
  const [isNavFullLength, setIsNavFullLength] = useState(false);
  const userInfo = getUserInfo();

  //@TODO: This says I dont understand "this"
  function getItem(item) {
    return userInfo[item] ?? "- not added -";
  }

  return (
    <div className="profile-page-container">
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
                onClick={() => setIsNavFullLength((prev) => !prev)}
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
                    to="/profile"
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
                    to="/addresses"
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
          <section className="profile-section">
            <h3 className="section-header">Profile Details</h3>
            <div className="section-body">
              <div className="profile-info">
                <p className="info-header">Email ID</p>{" "}
                <p className="info-value">{getItem("email")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">First Name</p>{" "}
                <p className="info-value">{getItem("firstName")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">Last Name</p>{" "}
                <p className="info-value">{getItem("lastName")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">User Name</p>{" "}
                <p className="info-value">{getItem("userName")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">Gender</p>{" "}
                <p className="info-value">{getItem("gender")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">Mobile Number</p>{" "}
                <p className="info-value">{getItem("mobileNumber")}</p>
              </div>
              <div className="profile-info">
                <p className="info-header">Date Of Birth</p>{" "}
                <p className="info-value">{getItem("dob")}</p>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export { Profile };
