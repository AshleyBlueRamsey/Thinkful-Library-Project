function findAuthorById(authors, id) {  //searches the database and returns an array of authors given the requested id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {  //searches the database and returns an array of books given the requested id
  return books.find((book) => book.id.includes(id));
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
