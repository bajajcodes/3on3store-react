import { Header, Footer } from "components/";
import { Link } from "react-router-dom";
import "./NotFound.styles.css";

function Button({to, text}) {
  return (
    <button
      className="btn btn-secondary bg-grey m-sm"
      style={{ width: "max-content" }}
    >
      <Link to={to} style={{ color: "white" }}>
        {text}
      </Link>
    </button>
  );
}

function NotFound() {
  return (
    <div className="home">
      <Header />
      <main className="notfound main">
        <div className="main-div-not-found">
          <p className="mb-6 text-decoration-underline">404 Page Not Found</p>
          Hey click button below, to get back on track.
          <Button to="/" text="Go Home" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { NotFound };
