import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import ProductModal from "./components/ProductModal";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [minRating, setMinRating] = useState(0);

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // API Fetch
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Search + Filters
  let filteredProducts = products.filter((product) => {
    const searchMatch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "all" || product.category === category;

    const priceMatch = product.price <= maxPrice;

    const ratingMatch = product.rating >= minRating;

    return searchMatch && categoryMatch && priceMatch && ratingMatch;
  });

  // Sorting
  if (sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Wishlist
  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);

      if (exists) {
        return current.filter((item) => item.id !== product.id);
      }

      return [...current, product];
    });
  };

  // Cart
  const addToCart = (product) => {
    setCart((current) => {
      const exists = current.some((item) => item.id === product.id);

      if (exists) {
        return current;
      }

      return [...current, product];
    });
  };

  return (
    <div className="app">

      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
      />

      <Hero />

      <main className="container py-5">

        <div className="shop-heading">
          <div>
            <span className="section-label">OUR COLLECTION</span>

            <h2>Explore Products</h2>

            <p>
              Discover products selected for your everyday lifestyle.
            </p>
          </div>

          <div className="product-count">
            {filteredProducts.length} Products
          </div>
        </div>

        <div className="shop-layout">

          <Filters
            categories={categories}
            category={category}
            setCategory={setCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minRating={minRating}
            setMinRating={setMinRating}
            sort={sort}
            setSort={setSort}
          />

          <div className="products-area">

            {loading && (
              <div className="loading-box">
                <div className="spinner-border" role="status"></div>
                <p>Loading products...</p>
              </div>
            )}

            {error && (
              <div className="error-box">
                <i className="bi bi-exclamation-circle"></i>
                <h4>Something went wrong</h4>
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && filteredProducts.length === 0 && (
              <div className="empty-box">
                <i className="bi bi-search"></i>
                <h4>No products found</h4>
                <p>Try changing your search or filters.</p>
              </div>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <div className="row g-4">

                {filteredProducts.map((product) => (
                  <div
                    className="col-xl-4 col-md-6"
                    key={product.id}
                  >
                    <ProductCard
                      product={product}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      addToCart={addToCart}
                      setSelectedProduct={setSelectedProduct}
                    />
                  </div>
                ))}

              </div>
            )}

          </div>
        </div>
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h3>LUMORA</h3>
            <p>Modern products. Simple shopping.</p>
          </div>

          <div className="footer-bottom">
            © 2026 LUMORA. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;