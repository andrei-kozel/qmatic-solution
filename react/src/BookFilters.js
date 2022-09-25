export function BookFilters({ filters, onFilterChange }) {
  return (
    <div>
      {filters.map((filter) => {
        return (
          <button key={filter} onClick={() => onFilterChange(filter)}>
            {filter}
          </button>
        );
      })}
    </div>
  );
}
