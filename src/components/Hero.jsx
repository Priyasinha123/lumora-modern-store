function Hero() {
  return (
    <section className="hero" id="collection">

      <div className="container">

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-label">
              NEW SEASON 2026
            </span>

            <h1>
              Everything you love,
              <br />
              <span>in one place.</span>
            </h1>

            <p>
              Discover our carefully selected collection of
              products designed for modern everyday living.
            </p>

            <a href="#shop" className="hero-button">
              Shop Collection
              <i className="bi bi-arrow-right"></i>
            </a>

          </div>

          <div className="hero-image">

            <div className="hero-circle"></div>

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
              alt="Shopping collection"
            />

            <div className="hero-card">
              <small>Trending now</small>
              <strong>New Collection</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;