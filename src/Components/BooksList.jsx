import React from "react";
import { observer } from "mobx-react";
import booksStore from "../Store/BooksStore.js";

const BooksList = observer(() => {
  const books = booksStore.isPrivateBooksView
    ? booksStore.privateBooks
    : booksStore.books;

  return (
    <div>
      {books?.length ? (
        books.map((book, i) => (
          <div key={i}>
            {book.author}: {book.name}
          </div>
        ))
      ) : (
        <div>No books available</div>
      )}
    </div>
  );
});

export default BooksList;
