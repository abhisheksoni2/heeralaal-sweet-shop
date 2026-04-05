function CategoryFilter({ categories, selected, setSelected }) {
  return (
    <div className="sidebar-list">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`sidebar-item${selected === cat ? " active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
