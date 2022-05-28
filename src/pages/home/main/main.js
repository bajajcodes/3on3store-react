import { ImageSlider } from "components/imageslider/imageslider";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <ImageSlider />

      <div className="column-padding">
        <blockquote>
          <div className="content-grid">
            <h3 className="text-xxl">3 on 3 Store</h3>
            <div className="text-md">
              <div>
                <div>Three things:</div>
                <div className="dflex">
                  <span>- Strength</span>
                  <span>- Intelligence</span>
                  <span>- Social Skills</span>
                </div>
              </div>

              <div>
                <div> You want to work on all three of them.</div>

                <div className="dflex">
                  <span>- You do not want to be 1/3.</span>
                  <span>- You do not want to be 2/3.</span>
                  <span>- You want to be 3/3.</span>
                </div>
              </div>

              <div>
                <div>Don't severely neglect one.</div>
                <div>
                  <strong>~Harsh Strongman</strong>
                </div>
              </div>
              <Link className="btn btn-secondary" to="/products">
                Buy Now
              </Link>
            </div>
          </div>
        </blockquote>
      </div>
    </main>
  );
}

export { Main };
