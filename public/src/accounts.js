function findAccountById(accounts, id) { //Searches through the array and finds the account that matches the requested id
  return accounts.find((account) => account.id.includes(id));
}

function sortAccountsByLastName(accounts) { //Sorts the accounts in the array by Last Name
  return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
}


function getTotalNumberOfBorrows(account, books) { //Searches through the array and returns the total number of books borrowed for each account
  let result = 0;
  const numberBorrowedById = books.forEach((book) => {
    if (!!book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
          result++;
        }
      });
    }
  });
  return result;
}


function _findAuthor (book, authors) {//This is a helper function to find the author to assist the function that gathers the total number of books currently in possession of each account
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) { //seaches the array and returns the total number of books currently in possession of each account
  const currentBooksBorrowed = [];
  books.forEach((book) => {
    let borrowedBooks = book.borrows;
    borrowedBooks.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        currentBooksBorrowed.push(book);
      }
    });
  });
  let result = currentBooksBorrowed.map((book) => {
    retur {...book, author: _findAuthor(book, authors)};
  });
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
