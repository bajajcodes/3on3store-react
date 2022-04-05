import { Header, Footer } from "components/";
import { Link } from "react-router-dom";
import "./NotFound.styles.css";

function NotFound() {
  return (
    <div className="home">
      <Header />
      <main className="notfound main">
        <div className="main-div-not-found">
          <p className="mb-6 text-decoration-underline">404 Page Not Found</p>
          Hey click button below, to get back on track.
          <button
            className="btn btn-secondary bg-grey m-sm"
            style={{ width: "max-content" }}
          >
            <Link to="/" style={{ color: "white" }}>
              Go Home
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { NotFound };
