export default function SectionTitle({ eyebrow, subtitle, children }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}
