import {
  FilterHeader,
  FilterCategory,
  FilterRating,
  FilterSortBy,
} from "./filtersCard/index.js";

function Nav({ show }) {
  return (
    <nav className={`aside-navbar ${show}`} id="aside-navbar">
      <FilterHeader />
      <FilterCategory />
      <FilterRating />
      <FilterSortBy />
    </nav>
  );
}

export { Nav };
