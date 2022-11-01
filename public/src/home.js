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
