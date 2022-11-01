function findAuthorById(authors, id) {  //searches the database and returns an array of authors given the requested id
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {  //searches the database and returns an array of books given the requested id
  return books.find((book) => book.id.includes(id));
}

//The following function named partitionBooksByBorrowedStatus returns two arrays inside of one
//The first array contains books that are currently checked out
//The second array contains books that have been returned
function partitionBooksByBorrowedStatus(books) {  
  const listOfBooksAvailable = books.filter((book) => book.borrows.returned === true);
  const listOfBooksBorrowed = books.filter((book) => book.borrows.returned === false); 
  return [listOfBooksBorrowed, listOfBooksAvailable];
}

function getBorrowersForBook(book, accounts) { //searches the database ad returns an array with the account information of 10 or fewer accounts that have borrowed a book
  const results = [];
  for (let account of accounts) {
    for (let i = 0; i < book.borrows.length; i++) {
      if (account.id === book.borrows[i].id) {
        const returned = book.borrows[i].returned;
        results.push({...account, returned});
      }
    }
  }
  return results.slice(0,10); //returns an arrof of 10 or fewer accounts
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
