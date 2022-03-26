import { useProducts } from "context";

function FilterCategory() {
  const { productsState, productsDispatch } = useProducts();
  const { categoryIntelligence, categorySocialSkills, categoryStrength } =
    productsState;
  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Category</h5>
        </div>
      </div>
      <div className="card-footer card-footer-dir-col">
        <div className="card-filter-category">
          <label>
            <input
              type="checkbox"
              name="intelligence"
              checked={categoryIntelligence}
              onChange={() =>
                productsDispatch({ type: "CATEGORY_INTELLIGENCE" })
              }
            />
            Intelligence
          </label>
        </div>
        <div className="card-filter-category">
          <label>
            <input
              type="checkbox"
              name="social skills"
              checked={categorySocialSkills}
              onChange={() =>
                productsDispatch({
                  type: "CATEGORY_SOCIAL_SKILLS",
                })
              }
            />
            Social Skills
          </label>
        </div>
        <div className="card-filter-category">
          <label>
            <input
              type="checkbox"
              name="strength"
              checked={categoryStrength}
              onChange={() => productsDispatch({ type: "CATEGORY_STRENGTH" })}
            />
            Strength
          </label>
        </div>
      </div>
    </div>
  );
}

export { FilterCategory };
