function getTotalBooksCount(books) {  //sorts through the database and returns a number that represents the total number of books in the database
  const totalNumberOfBooks = books.map((book) => books);
  return totalNumberOfBooks.length;
}

function getTotalAccountsCount(accounts) { //sorts through the database and returns a number that represents the total number of accounts
  const numberOfAccounts = accounts.reduce((account) => {
    account = accounts.map((account) => account);
    return account.length;
  }, 0);
  return numberOfAccounts;
}

function getBooksBorrowedCount(books) { //sorts through the database and returns a number that represents the total number of books that are out on loan
  const booksOnLoan = books.filter((book) => book.borrows[0].returned === false);
  return booksOnLoan.length;
}

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
