export default function DateField({ label, value, onChange, error, id, min, max }) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={inputId} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontWeight: 500 }}>{label}</span>
      <input
        id={inputId}
        type="date"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        style={{
          padding: "6px 10px",
          border: error ? "1px solid crimson" : "1px solid #ccc",
          borderRadius: 6,
        }}
      />
      {error && <span style={{ color: "crimson", fontSize: "0.85em" }}>{error}</span>}
    </label>
  );
}