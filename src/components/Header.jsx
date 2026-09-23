function Header({
  search,
  setSearch,
  cartCount,
  wishlistCount,
}) {
  return (
    <header className="header">

      <div className="container">

        <div className="header-inner">

          <a href="#" className="logo">
            LUMORA
          </a>

          <nav className="desktop-nav">
            <a href="#">Home</a>
            <a href="#shop">Shop</a>
            <a href="#collection">Collection</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">

            <div className="header-search">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="icon-button">
              <i className="bi bi-heart"></i>

              {wishlistCount > 0 && (
                <span>{wishlistCount}</span>
              )}
            </button>

            <button className="icon-button">
              <i className="bi bi-bag"></i>

              {cartCount > 0 && (
                <span>{cartCount}</span>
              )}
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;