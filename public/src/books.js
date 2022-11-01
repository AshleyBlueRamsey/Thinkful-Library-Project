function findAuthorById(authors, id) {  //searches the database and returns an array of authors given the requested id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
