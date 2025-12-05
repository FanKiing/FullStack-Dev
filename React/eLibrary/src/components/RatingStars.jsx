export default function RatingStars({ value, onChange }) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{ cursor: onChange ? "pointer" : "default" }}
          onClick={onChange ? () => onChange(s) : undefined}
        >
          {s <= Math.round(value) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}
