function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id));
}
//Loops through the array and finds the account that matches the requested id

function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
