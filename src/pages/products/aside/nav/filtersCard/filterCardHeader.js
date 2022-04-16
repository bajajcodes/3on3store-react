import { useProducts } from "context";
import { useNavigate, useLocation } from "react-router-dom";

function FilterHeader() {
  const { productsDispatch } = useProducts();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Filters</h5>
          <h6
            onClick={() => {
              productsDispatch({ type: "CLEAR_ALL_FILTERS" });
              if (location.pathname.split("/")[3]) {
                navigate("/products", { replace: true });
              }
            }}
            className="card-subtitle card-subtitle-m-0 clear-all-filters"
          >
            Clear
          </h6>
        </div>
      </div>
    </div>
  );
}

export { FilterHeader };
