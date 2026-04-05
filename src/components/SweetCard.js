function SweetCard({ item, phone }) {
  const placeholder = "https://via.placeholder.com/300x280/f9f6f2/ccc?text=" + encodeURIComponent(item.name);
  return (
    <div className="product-card">
      <img src={item.image || placeholder} alt={item.name} />
      <div className="product-info">
        <div className="product-name">{item.name}</div>
        {item.description && <div className="product-desc">{item.description}</div>}
        {item.quantity && <div className="product-qty">{item.quantity}</div>}
        {item.price && <div className="product-price">&#8377; {item.price.toLocaleString("en-IN")}</div>}
        <a
          href={`https://wa.me/${phone}?text=I want to order ${item.name}`}
          target="_blank"
          rel="noreferrer"
          className="order-btn"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}

export default SweetCard;