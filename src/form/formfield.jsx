export default function FormField({ label, value, onChange, error, id, ...rest }) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={inputId} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{ fontWeight: 500 }}>{label}</span>
      <input
        id={inputId}
        value={value}
        onChange={onChange}
        style={{
          padding: "6px 10px",
          border: error ? "1px solid crimson" : "1px solid #ccc",
          borderRadius: 6,
        }}
        {...rest}
      />
      {error && <span style={{ color: "crimson", fontSize: "0.85em" }}>{error}</span>}
    </label>
  );
}