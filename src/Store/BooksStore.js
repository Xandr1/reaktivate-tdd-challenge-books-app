import { makeAutoObservable, runInAction } from "mobx";
import booksRepository from "../Repository/Books.repository";

class BooksStore {
  books = [];
  privateBooks = [];
  isPrivateBooksView = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async () => {
    const books = await booksRepository.getBooks();

    runInAction(() => {
      this.books = books;
    });
  };

  fetchPrivateBooks = async () => {
    const privateBooks = await booksRepository.getPrivateBooks();

    runInAction(() => {
      this.privateBooks = privateBooks;
    });
  };

  switchView = (isPrivateBooks) => {
    this.isPrivateBooksView = isPrivateBooks;

    if (this.isPrivateBooksView) {
      this.fetchPrivateBooks();
    } else {
      this.fetchBooks();
    }
  };

  addBook = async ({ name, author }) => {
    const isFilled = name?.trim()?.length && author?.trim()?.length;

    if (!isFilled) return console.error("provide name and author");

    const result = await booksRepository.addBook({ name, author });
    if (result) {
      runInAction(() => {
        this.books.push({ name, author });
        this.privateBooks.push({ name, author });
      });
    }
    return result;
  };

  get privateBooksCount() {
    return this.privateBooks.length;
  }
}

const booksStore = new BooksStore();
export default booksStore;
