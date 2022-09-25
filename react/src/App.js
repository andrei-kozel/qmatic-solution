import "./App.css";
import { getBooks } from "./books-mock";
import { BookFilters } from "./BookFilters";
import { SelectableBooks } from "./SelectableBooks";
import { useEffect, useState } from "react";
import { Summary } from "./Summary";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState();
  const [filter, setFilter] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState();

  // initial data loading, add property isSelected with default value false to every book object
  useEffect(() => {
    setIsLoading(true);
    let booksData = getBooks().map((book) => {
      book.isSelected = false;
      return book;
    });
    setBooks(booksData);
    setIsLoading(false);
  }, []);

  // filter books
  useEffect(() => {
    const filterBoks = () => {
      if (!isLoading) {
        if (filter === "All") {
          setFilteredBooks(books);
        } else {
          setFilteredBooks(books.filter((book) => book.genre === filter));
        }
      }
    };

    filterBoks();
  }, [filter, isLoading, books]);

  // handle filter change and reset selectef books on filter change
  const handleChangeFilter = (res_filter) => {
    resetSelected();
    setFilter(res_filter);
  };

  // reset all selected books
  const resetSelected = () => {
    setFilteredBooks(
      filteredBooks.map((book) => {
        book.isSelected = false;
        return book;
      })
    );
  };

  // generate filter array with unique values based on books data
  const getFilters = () => {
    if (!isLoading) {
      return ["All", ...new Set(books.map((book) => book.genre))];
    }
  };

  // select a book
  const handleSelectBook = (book) => {
    setFilteredBooks(
      filteredBooks.map((b) => {
        if (b.id === book.id) {
          b.isSelected = !b.isSelected;
        }
        return b;
      })
    );
  };

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <>
          <h1>The Library</h1>
          <BookFilters
            filters={getFilters()}
            onFilterChange={handleChangeFilter}
          />

          <SelectableBooks
            handleSelectBook={handleSelectBook}
            filteredBooks={filteredBooks}
          />
          <h2>Selected Books Summary</h2>
          <Summary books={filteredBooks} />
        </>
      )}
    </>
  );
}

export default App;
