function Header({ shop }) {
  return (
    <>
      <div className="announcement-bar">
        For Bulk Orders Call &mdash; {shop.phone}
      </div>
      <header className="site-header">
        <div className="header-brand">
          <div className="brand-name">{shop.name}</div>
          <div className="brand-sub">&mdash; Progressive Indian Sweets &mdash;</div>
        </div>
        <div className="header-nav-row">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-icons">
            <a href={`tel:${shop.phone}`} title="Call us">📞</a>
            <a href={`https://wa.me/${shop.phone}?text=I want to order sweets!`} target="_blank" rel="noreferrer" title="WhatsApp">💬</a>
            <a href="https://www.instagram.com/shree_heeralal_sweets/" target="_blank" rel="noreferrer" title="Instagram">📸</a>
            <a href="https://maps.app.goo.gl/P4T1m1GXogNAtpTs9" target="_blank" rel="noreferrer" title="Directions">🗺️</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
