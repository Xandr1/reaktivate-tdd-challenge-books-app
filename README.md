# Reaktivate TDD (fast-test) Books App

We have a page that shows a list of "books", a button to add a book, switch between "All books" and "Private books" and sticky application-wide header with a private books number.

There is API that uses the format https://tdd.demo.reaktivate.com/v1/books/[user], where "user" is your identifier.

API swagger: https://tdd.demo.reaktivate.com/api-docs/

## How to run

1. Create apiKey at https://tdd.demo.reaktivate.com/api-docs/.

2. Open any API endpoint in the browser directly and allow this certificate to be used.

2. Add apiKey value at `config.js`.

2. `npm install`.

3. `npm run start`.

### How to test

`npm run test`
