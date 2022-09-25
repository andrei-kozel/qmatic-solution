export function SelectableBooks({ filteredBooks, handleSelectBook }) {
  return (
    <>
      {filteredBooks &&
        filteredBooks.map((book) => {
          return (
            <div
              key={book.id}
              onClick={() => handleSelectBook(book)}
              style={{
                backgroundColor: book.isSelected ? "#86efac" : "",
                cursor: "pointer",
                padding: "2px",
                maxWidth: "max-content",
              }}
            >
              {book.title}
            </div>
          );
        })}
    </>
  );
}
