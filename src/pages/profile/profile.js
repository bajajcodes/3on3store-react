import "./profile.styles.css";
import { profileInfo } from "data";
import { Loader } from "components";
import { useAuthContext } from "context";
import { useState, useEffect } from "react";

function Profile() {
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
          {profileInfo.map(({ headerText, itemKey }, index) => (
            <div className="profile-info" key={index}>
              <p className="info-header">{headerText}</p>{" "}
              <p className="info-value">{getItem(itemKey)}</p>
            </div>
          ))}
        </div>
      )}
      <Loader display={loader} message="Profile" />
    </section>
  );
}

export { Profile };
