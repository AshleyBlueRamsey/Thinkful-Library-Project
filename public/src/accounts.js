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

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
