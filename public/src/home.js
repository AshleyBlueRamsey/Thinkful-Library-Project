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

function _topFiveMostCommon(array) { //This is a helper function for the function named getMostCommonGenres and it returns the top 5 results
  const results = array.sort((numA, numB) => (numA.count < numB.count ? 1 : -1)).slice(0,5); //Ensures that the results return no more than 5
  return results;
}
  
function getMostCommonGenres(books) { //Sorts through the database and returns an array with five or less names of the most common genres
  const listOfMostFrequent = [];
  for (let book of books) {
    const genre = listOfMostFrequent.find((currentGenre) => currentGenre.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      listOfMostFrequent.push({ name: book.genre, count: 1});
    }
  }
  return _topFiveMostCommon(listOfMostFrequent);
}

function getMostPopularBooks(books) { //Sorts through the database and returns an array with five or less names of the most popular books
  const mostLikedBooks = [];
  for (let book of books) {
    const popular = book.borrows.length;
    const best = mostLikedBooks.find((popularBook) => popularBook.name === book);
    if (best) {
      best.count++;
    } else {
      mostLikedBooks.push({ name: book.title, count: popular});
    }
  }
  return _topFiveMostCommon(mostLikedBooks);//used the helper function named _topFiveMostCommon to assist with returning the top 5 results
}

function getMostPopularAuthors(books, authors) {//sorts through the database and returns 5 or less of the most popular authors whose books have been checked out the most
  const bestAuthors = [];
  for (let author of authors) {
    const nameOfAuthor = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const listOfAuthors = { name: nameOfAuthor, count: count};
    bestAuthors.push(listOfAuthors);
  }
  return _topFiveMostCommon(bestAuthors);
}
    

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
