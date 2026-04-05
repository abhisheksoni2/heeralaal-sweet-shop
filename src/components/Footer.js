function Footer({ shop }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>{shop.name}</h3>
          <p>
            Crafting traditional Indian sweets with love and authenticity.
            We bring the finest mithai, bakery, cakes, and desserts
            to your celebrations.
          </p>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <p>📍 {shop.address}</p>
          <p>📞 {shop.phone}</p>
          <a
            href={`https://wa.me/${shop.phone}?text=Hi, I have a query`}
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="https://www.instagram.com/shree_heeralal_sweets/" target="_blank" rel="noreferrer">📸 Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} {shop.name}</span>
        <span>Made with ♥ in Mirzapur</span>
      </div>
    </footer>
  );
}

export default Footer;
