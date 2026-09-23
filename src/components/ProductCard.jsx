function ProductCard({
  product,
  wishlist,
  toggleWishlist,
  addToCart,
  setSelectedProduct,
}) {
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const oldPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />

        <span className="discount-badge">
          -{Math.round(product.discountPercentage)}%
        </span>

        <button
          className={
            isWishlisted
              ? "wishlist-button active"
              : "wishlist-button"
          }
          onClick={() => toggleWishlist(product)}
        >
          <i
            className={
              isWishlisted
                ? "bi bi-heart-fill"
                : "bi bi-heart"
            }
          ></i>
        </button>

        <button
          className="quick-view"
          onClick={() => setSelectedProduct(product)}
        >
          Quick View
        </button>

      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.title}</h3>

        <div className="rating">

          <i className="bi bi-star-fill"></i>

          <strong>
            {product.rating}
          </strong>

          <span>
            ({product.reviews?.length || 0} reviews)
          </span>

        </div>

        <div className="price-row">

          <div>
            <span className="current-price">
              ${product.price}
            </span>

            <span className="old-price">
              ${oldPrice}
            </span>
          </div>

          <button
            className="add-cart"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-bag-plus"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;