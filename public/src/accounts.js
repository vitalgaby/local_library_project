function findAccountById(accounts, id) {
  // returns the account object when given a particular ID
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // creates a copy of the orriginal array using spread syntax
  const sorted = [...accounts]; 
  
  sorted.sort((acnt1, acnt2) => 
  // sorts the array using the compare function below
  // converts the names to lowercase before comparing
    acnt1.name.last.toLowerCase() > acnt2.name.last.toLowerCase() ? 1 : -1 
    // This causes .sort() to sort the array in ascending alphabetical order by last name
  );
  // it returns the sorted copied array.
  return sorted;
}

// to specify this function, I returned the function alphabetically and sorted by last name.

function getAccountFullNames(accounts) {
  // returns an array of full names for each account
  // this function uses the map() method to iterate through each account
  return accounts.map(account => {
    return `${account.name.last} ${account.name.first}`;
  });
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
