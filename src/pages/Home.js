import { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import SweetCard from "../components/SweetCard";
import Footer from "../components/Footer";

function Home() {
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null); // null = landing, string = shop mode
  const [showShop, setShowShop] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p style={{ textAlign: "center", padding: 60, fontFamily: "'Poppins', sans-serif", color: "#999" }}>Loading...</p>;

  const filtered =
    !selected || selected === "All"
      ? data.products
      : data.products.filter(p => p.category === selected);

  // Pick featured items (one from each category)
  const featured = [];
  const seen = new Set();
  for (const p of data.products) {
    if (!seen.has(p.category)) {
      featured.push(p);
      seen.add(p.category);
    }
    if (featured.length >= 4) break;
  }

  // Category icons
  const catIcons = {
    Namkeen: "🍘",
    Snacks: "🍿",
    Cakes: "🎂",
    Pastries: "🧁",
    Sides: "🧀"
  };

  const handleCategoryClick = (cat) => {
    setSelected(cat);
    setShowShop(true);
    setTimeout(() => {
      document.getElementById("shop-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleExploreAll = () => {
    setSelected("All");
    setShowShop(true);
    setTimeout(() => {
      document.getElementById("shop-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="page-wrapper">
      <Header shop={data.shop} />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-overlay">
          <p className="hero-tagline">{data.shop.tagline}</p>
          <div className="hero-divider"></div>
          <h1 className="hero-title">Taste the Tradition</h1>
          <p className="hero-sub">Crafting traditional sweets with love since generations</p>
          <button className="hero-btn" onClick={handleExploreAll}>Explore Our Collection</button>
        </div>
      </section>

      {/* ===== CATEGORY SHOWCASE ===== */}
      <section className="category-showcase">
        <h2 className="section-heading">Shop by Category</h2>
        <div className="category-cards">
          {data.categories.filter(c => c !== "All").map(cat => (
            <div
              key={cat}
              className="category-card"
              onClick={() => handleCategoryClick(cat)}
            >
              <div className="category-icon">{catIcons[cat] || "🍬"}</div>
              <div className="category-label">{cat}</div>
              <div className="category-count">
                {data.products.filter(p => p.category === cat).length} items
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PICKS ===== */}
      <section className="featured-section">
        <h2 className="section-heading">Featured Picks</h2>
        <div className="featured-grid">
          {featured.map(item => (
            <SweetCard key={item.id} item={item} phone={data.shop.phone} />
          ))}
        </div>
        {!showShop && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="hero-btn" onClick={handleExploreAll}>View All Products</button>
          </div>
        )}
      </section>

      {/* ===== FULL SHOP (shown on demand) ===== */}
      {showShop && (
        <section id="shop-section">
          <div className="content-area">
            <aside className="sidebar">
              <div className="sidebar-title">Categories</div>
              <CategoryFilter
                categories={data.categories}
                selected={selected || "All"}
                setSelected={setSelected}
              />
            </aside>

            <div style={{ flex: 1 }}>
              <h2 className="section-heading">
                {!selected || selected === "All" ? "Our Collection" : selected}
              </h2>
              <div className="product-grid">
                {filtered.map(item => (
                  <SweetCard key={item.id} item={item} phone={data.shop.phone} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== ABOUT US SECTION ===== */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <h2 className="section-heading">About Us</h2>
          <p className="about-intro">
            New Shree Hiralal and Sons Sweets in Vindhyachal, Mirzapur is a renowned bakery offering a delectable range of freshly baked goods and pastries. Situated in a prime location in Mirzapur, the bakery attracts food lovers from all over the area. With an impressive 4.5 rating based on 365 reviews, New Shree Hiralal and Sons Sweets is a go-to destination for those looking to indulge in delightful baked treats.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>Overview</h3>
              <p>New Shree Hiralal and Sons Sweets takes pride in offering a variety of high-quality baked goods, from bread and cakes to cookies and pastries.</p>
            </div>

            <div className="about-card">
              <h3>Amenities &amp; Services</h3>
              <ul>
                <li>Custom orders for special occasions, including cakes for birthdays, weddings, and anniversaries.</li>
                <li>Pre-order services to ensure availability of popular items.</li>
                <li>Delivery options for bulk orders or special events.</li>
              </ul>
            </div>

            <div className="about-card">
              <h3>Commitment to Quality</h3>
              <p>At New Shree Hiralal and Sons Sweets, quality is the top priority. Every item is crafted with the finest ingredients, ensuring a fresh and flavorful experience with every bite.</p>
            </div>
          </div>

          <p className="about-summary">
            With its signature cakes, fresh breads, and delightful pastries, it's no wonder that New Shree Hiralal and Sons Sweets has earned a loyal following.
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="address-strip">
        <div className="address-inner">
          <div>
            <h3>📍 Visit Us</h3>
            <p>{data.shop.address}</p>
          </div>
          <div>
            <h3>📞 Call Us</h3>
            <p>{data.shop.phone}</p>
          </div>
          <div>
            <h3>💬 WhatsApp</h3>
            <a
              href={`https://wa.me/${data.shop.phone}?text=Hi, I want to place an order!`}
              target="_blank"
              rel="noreferrer"
            >
              Order Now
            </a>
          </div>
          <div>
            <h3>🗺️ Directions</h3>
            <a
              href="https://maps.app.goo.gl/P4T1m1GXogNAtpTs9"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer shop={data.shop} />
    </div>
  );
}

export default Home;