import React, { useEffect, useState } from "react";

export const Summary = ({ books }) => {
  const [pagesTotal, setPagesTotal] = useState();

  // update total pages
  useEffect(() => {
    let pagesSum = 0;

    books &&
      books.forEach((book) => {
        if (book.isSelected) {
          pagesSum += book.numberOfPages;
        }
      });

    setPagesTotal(pagesSum);
  }, [books]);

  return (
    <div>
      {pagesTotal > 0 && (
        <>
          <table>
            <tbody>
              <tr>
                <th style={{ width: "220px" }}>Selected titles</th>
                <th>Selected IDs</th>
              </tr>
              {books.map((book) => {
                if (book.isSelected) {
                  return (
                    <tr key={book.id}>
                      <td>{book.title}</td>
                      <td>{book.id}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          <p>
            Total number of pages in selected books: <b>{pagesTotal}</b>
          </p>
        </>
      )}
    </div>
  );
};
