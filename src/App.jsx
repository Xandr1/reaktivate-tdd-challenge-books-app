import React from "react";
import BooksList from "./Components/BooksList.jsx";
import BooksHeader from "./Components/BooksHeader.jsx";
import "./styles.css";

const App = () => (
  <>
    <BooksHeader />
    <BooksList />
  </>
);

export default App;
