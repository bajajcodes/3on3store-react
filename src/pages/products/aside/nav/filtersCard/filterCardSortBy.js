function FilterSortBy() {
  return (
    <div className="card card-with-no-border">
      <div className="card-body">
        <div className="card-heading card-heading-dflex">
          <h5 className="card-title card-title-m-0">Sort by</h5>
        </div>
      </div>
      <div className="card-footer card-footer-dir-col">
        <div className="card-filter-category">
          <label htmlFor="price-htol">
            <input type="radio" name="price" id="price-htol" />
            Price - High to Low
          </label>
        </div>

        <div className="card-filter-category">
          <label htmlFor="price-ltoh">
            <input type="radio" name="price" id="price-ltoh" />
            Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
}

export { FilterSortBy };
