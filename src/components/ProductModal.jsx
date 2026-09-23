function ProductModal({
  product,
  closeModal,
  addToCart,
}) {
  return (
    <div
      className="modal-backdrop-custom"
      onClick={closeModal}
    >

      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="modal-close"
          onClick={closeModal}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="row g-0">

          <div className="col-md-6 modal-image-area">

            <img
              src={product.images?.[0] || product.thumbnail}
              alt={product.title}
            />

          </div>

          <div className="col-md-6">

            <div className="modal-content-custom">

              <span className="product-category">
                {product.category}
              </span>

              <h2>{product.title}</h2>

              <div className="rating mb-3">

                <i className="bi bi-star-fill"></i>

                <strong>
                  {product.rating}
                </strong>

              </div>

              <div className="modal-price">
                ${product.price}
              </div>

              <p className="modal-description">
                {product.description}
              </p>

              <div className="stock-info">
                <i className="bi bi-check-circle-fill"></i>
                {product.stock} items available
              </div>

              <button
                className="modal-cart-button"
                onClick={() => {
                  addToCart(product);
                  closeModal();
                }}
              >
                <i className="bi bi-bag-plus"></i>
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductModal;