import ApiGateway from "../Shared/ApiGateway.js";

class BooksRepository {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.get("/");

    return booksDto;
  };

  getPrivateBooks = async () => {
    const privateBooksDto = await this.httpGateway.get("/private");

    return privateBooksDto;
  };

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/", { name, author });

    return bookAddDto?.status === "ok";
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
