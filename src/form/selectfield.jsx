export default function SelectField({ label, value, onChange, options, placeholder, error, id }) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={selectId} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontWeight: 500 }}>{label}</span>
      <select
        id={selectId}
        value={value}
        onChange={onChange}
        style={{
          padding: "6px 10px",
          border: error ? "1px solid crimson" : "1px solid #ccc",
          borderRadius: 6,
          background: "#fff",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span style={{ color: "crimson", fontSize: "0.85em" }}>{error}</span>}
    </label>
  );
}