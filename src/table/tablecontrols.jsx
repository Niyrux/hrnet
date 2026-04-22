const DEFAULT_OPTIONS = [10, 25, 50, 100];

export default function TableControls({
  entries,
  onEntriesChange,
  entriesOptions = DEFAULT_OPTIONS,
  query,
  onQueryChange,
  searchPlaceholder = "Search in all fields…",
}) {
  return (
    <div className="tc-wrapper">
      <label className="tc-label">
        Show{" "}
        <select
          className="tc-select"
          value={entries}
          onChange={(e) => onEntriesChange(Number(e.target.value))}
        >
          {entriesOptions.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>{" "}
        entries
      </label>

      <input
        type="search"
        className="tc-search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={searchPlaceholder}
      />
    </div>
  );
}