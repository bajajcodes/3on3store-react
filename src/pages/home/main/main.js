import { ImageSlider } from "../../../components/imageslider/imageslider.js";

function Main() {
  return (
    <main className="main">
      <ImageSlider sources={"array of images src"} />

      <div className="column-padding">
      <blockquote>
      <div className="content-grid">
          <h3 className="text-xxl">3 on 3 Store</h3>
          <div className="text-md">

              <div>
              <div>Three things:</div>
              <div className="dflex">
              <span>- Strength/Aesthetics/Fitness</span>
              <span>- Knowledge/Wisdom/Intelligence</span>
              <span>- Social Skills/Machiavellianism/Game</span>
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
            <div><strong>~Harsh Strongman</strong></div>
          </div>
            {/* a href tag needed to be fixed with routes and links */}
            <a className="btn btn-secondary" href="pages/products.html">
              Buy Now
            </a>
          </div>
        </div>
      </blockquote>
      </div>
    </main>
  );
}

export { Main };
