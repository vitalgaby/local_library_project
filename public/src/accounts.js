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
  acnt1.name.last.toUpperCase() > acnt2.name.last.toUpperCase() ? 1 : -1 
  // This causes .sort() to sort the array in ascending alphabetical order by last name
  );
  // it returns the sorted copied array.
  return sorted;
}

function getAccountFullNames(accounts) {

  // Used map() to transform each account into a full name
  return accounts.map(account => {

    // Gets first and last name variables
    const firstName = account.name.first; 
    const lastName = account.name.last;

    // Returns full name string with first and last names
    return `${firstName} ${lastName}`; 
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


