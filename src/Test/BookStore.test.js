import booksStore from "../Store/BooksStore.js";
import booksRepository from "../Repository/Books.repository.js";

booksRepository.getBooks = async () => {
  return [
    { name: "Book 1", author: "Author 1" },
    { name: "Book 2", author: "Author 2" },
  ];
};

booksRepository.addBook = async ({ name, author }) => {
  return name && author ? true : false;
};

describe("BooksStore", () => {
  beforeEach(() => {
    booksStore.books = [];
  });

  it("fetchBooks: should fetch books and set the books array", async () => {
    await booksStore.fetchBooks();

    expect(booksStore.books.length).toBe(2);
    expect(booksStore.books[0]).toEqual({ name: "Book 1", author: "Author 1" });
  });

  it("addBook: should add a valid book to the store", async () => {
    const result = await booksStore.addBook({
      name: "New Book",
      author: "New Author",
    });

    expect(result).toBe(true);
    expect(booksStore.books).toContainEqual({
      name: "New Book",
      author: "New Author",
    });
  });

  it("addBook: should not add a book with invalid input", async () => {
    const result = await booksStore.addBook({ name: "", author: "" });

    expect(result).toBeUndefined();
    expect(booksStore.books.length).toBe(0);
  });
});
