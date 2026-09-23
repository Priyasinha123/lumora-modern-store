function Filters({
  categories,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  sort,
  setSort,
}) {
  return (
    <aside className="filters">

      <div className="filter-header">
        <h4>Filters</h4>

        <button
          onClick={() => {
            setCategory("all");
            setMaxPrice(1500);
            setMinRating(0);
            setSort("default");
          }}
        >
          Reset
        </button>
      </div>

      <div className="filter-group">

        <h5>Categories</h5>

        <div className="category-list">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setCategory(item)}
            >
              {item.replaceAll("-", " ")}
            </button>
          ))}

        </div>

      </div>

      <div className="filter-group">

        <h5>Maximum Price</h5>

        <div className="price-value">
          ${maxPrice}
        </div>

        <input
          type="range"
          min="0"
          max="1500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="form-range"
        />

        <div className="range-labels">
          <span>$0</span>
          <span>$1500</span>
        </div>

      </div>

      <div className="filter-group">

        <h5>Minimum Rating</h5>

        {[0, 3, 4, 4.5].map((rating) => (
          <label className="rating-option" key={rating}>

            <input
              type="radio"
              name="rating"
              checked={minRating === rating}
              onChange={() => setMinRating(rating)}
            />

            <span>
              {rating === 0 ? (
                "All ratings"
              ) : (
                <>
                  {rating}+ <i className="bi bi-star-fill"></i>
                </>
              )}
            </span>

          </label>
        ))}

      </div>

      <div className="filter-group">

        <h5>Sort By</h5>

        <select
          className="sort-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

      </div>

    </aside>
  );
}

export default Filters;