function Filter({ titleFilter, setTitleFilter, rateFilter, setRateFilter }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        margin: "1rem 0",
      }}
    >
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />

      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="5"
        value={rateFilter}
        onChange={(e) => setRateFilter(Number(e.target.value))}
        style={{
          padding: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          width: "100px",
          fontSize: "1rem",
        }}
      />
    </div>
  );
}
export default Filter;
