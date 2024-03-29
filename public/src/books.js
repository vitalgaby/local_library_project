function findAuthorById(authors, id) {
  // returns the author object when given a particular ID
  // used find() to find the author object with the matching ID
 return authors.find(author => author.id === id);
}


function findBookById(books, id) {
  // returns the book object when given a particular ID
  // used find() to find the books object with the matching ID
  return books.find(book => book.id === id);
}



// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

// added this function to properly capitalize the title of each book
// used the split() method to split the title into an array of words
// used the loop to capitalize each word in the array
function capitalizeTitle(title) {
  const words = title.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
books.forEach(book => {
  book.title = capitalizeTitle(book.title);
});

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
