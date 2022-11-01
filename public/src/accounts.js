function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id));
}
//Loops through the array and finds the account that matches the requested id

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last.toLowerCase() > lastNameB.name.last.toLowerCase() ? 1 : -1);
}
//Sorts the accounts in the array by Last Name

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
