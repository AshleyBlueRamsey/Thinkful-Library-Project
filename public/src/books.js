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

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
