import React from "react";
import booksStore from "../Store/BooksStore";
import { observer } from "mobx-react";

const BooksList = observer(() => {
  return (
    <div>
      {(booksStore.isPrivateBooksView
        ? booksStore.privateBooks
        : booksStore.books
      ).map((book, i) => (
        <div key={i}>
          {book.author}: {book.name}
        </div>
      ))}
    </div>
  );
});

export default BooksList;
