import "./footer.styles.css";
import { Link } from "react-router-dom";
import { logoImage } from "data";

function Footer() {
  const { logoPath, logoDesc } = logoImage;

  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="navbar-brand footer-logo">
          <Link to="/" className="nav-link">
            <img
              src={logoPath}
              alt={logoDesc}
              className="d-inline-block align-text-top"
              width="40"
              height="40"
            />
            3 on 3 Store
          </Link>
        </div>
        <p>
          Get what you need to live a life less ordinary, become 3 on 3 and live
          a healthy life, make money and game the system. 3 on 3 Store is
          subject to truth risk and persuasive skill.
        </p>
      </div>
      <h2 className="footer-writer">
        Written ✍🏻 by <br />
        Shubham Bajaj.
      </h2>
    </footer>
  );
}

export { Footer };
