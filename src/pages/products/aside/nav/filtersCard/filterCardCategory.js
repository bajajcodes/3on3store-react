function FilterCategory() {
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
            <input type="checkbox" name="intelligence" />
            Intelligence
          </label>
        </div>
        <div className="card-filter-category">
          <label>
            <input type="checkbox" name="social skills" />
            Social Skills
          </label>
        </div>
        <div className="card-filter-category">
          <label>
            <input type="checkbox" name="strength" />
            Strength
          </label>
        </div>
      </div>
    </div>
  );
}

export { FilterCategory };
