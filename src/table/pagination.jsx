import "./pagination.css";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  visibleCount,
  totalCount,
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination" >
      <p >
        Showing {visibleCount} of {totalCount}
      </p>

      {totalPages > 1 && (
        <div >
          <PageButton
            label="Previous"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          />

          {pages.map((p) => (
            <PageButton
              key={p}
              label={String(p)}
              active={p === currentPage}
              onClick={() => onPageChange(p)}
            />
          ))}

          <PageButton
            label="Next"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </div>
      )}
    </div>
  );
}

function PageButton({ label, onClick, disabled = false, active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}