import "./profile.styles.css";
import { Loader } from "components";
import { useAuthContext } from "context";
import { useState, useEffect } from "react";

function Profile() {
  const { authState } = useAuthContext();
  const [userDetails, setUserDetails] = useState(false);
  const [loader, setLoader] = useState("flex");

  //@TODO: This says I dont understand "this"
  function getItem(item) {
    return userDetails[item] ?? "- not added -";
  }

  function getuserInfo() {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo;
  }

  useEffect(() => {
    const userInfo = getuserInfo();
    setLoader("none");
    setUserDetails(userInfo);
  }, []);

  return (
    <section className="profile-section common-section">
      {userDetails && <h3 className="section-header">Profile Details</h3>}
      {userDetails && (
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
      )}
      <Loader display={loader} message="Profile" />
    </section>
  );
}

export { Profile };
