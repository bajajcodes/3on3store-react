import "./profile.styles.css";

function getUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo"));
}

function Profile() {
  const userInfo = getUserInfo();

  //@TODO: This says I dont understand "this"
  function getItem(item) {
    return userInfo[item] ?? "- not added -";
  }

  return (
    <section className="profile-section common-section">
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
  );
}

export { Profile };
