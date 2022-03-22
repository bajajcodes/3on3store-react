import { StarRating } from "components/index";
import { starColor } from "data";

function FilterRating() {
  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Rating</h5>
        </div>
      </div>
      <div className="card-footer card-footer-dir-col">
        <div className="card-filter-category">
          <StarRating starColor={starColor} className="input" />
        </div>
      </div>
    </div>
  );
}

export { FilterRating };
