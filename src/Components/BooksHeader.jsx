import React, { useState } from "react";
import booksStore from "../Store/BooksStore";
import { observer } from "mobx-react";

const BooksHeader = observer(() => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  React.useEffect(() => {
    booksStore.fetchBooks();
    booksStore.fetchPrivateBooks();
  }, []);

  const handleAddBook = () => {
    booksStore.addBook({ name, author });
    setName("");
    setAuthor("");
  };

  return (
    <div>
      <div>
        <span>Your books: {booksStore.privateBooksCount}</span>
      </div>
      <div>
        <button
          onClick={() => booksStore.switchView(false)}
          className={!booksStore.isPrivateBooksView ? "inactive" : ""}
        >
          All Books
        </button>
        <button
          onClick={() => booksStore.switchView(true)}
          className={booksStore.isPrivateBooksView ? "inactive" : ""}
        >
          Private Books
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Book Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="userInput"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="userInput"
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
});

export default BooksHeader;
