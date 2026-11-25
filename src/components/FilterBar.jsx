export default function FilterBar({ categories, labels = {}, active, onChange }) {
  return (
    <div className="filters" role="tablist">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={cat === active}
          className={`chip ${cat === active ? "active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {labels[cat] ?? cat}
        </button>
      ))}
    </div>
  );
}
