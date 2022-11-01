function getTotalBooksCount(books) {  //sorts through the database and returns a number that represents the total number of books in the database
  const totalNumberOfBooks = books.map((book) => books);
  return totalNumberOfBooks.length;
}

function getTotalAccountsCount(accounts) {}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
