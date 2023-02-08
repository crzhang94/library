
// Empty array for storing book objects
let myLibrary = [];

// Constructor for making book objects
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    // function that can report the book info (from exercise)
    this.info = function() {
      return title + " by " + author + ", " + pages + " pages, " + readStatus;
    }
}

// Function to store new book objects into library array
function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

// Sample books - currently 3 books in the library w/o user input
addBookToLibrary('Cats', 'Me', 192, 'read');
addBookToLibrary('Cats', 'Me', 1922, 'read');
addBookToLibrary('Cats', 'Me', 1923, 'read');
console.log(myLibrary.length);

// Function that loops through array and displays each book on the page
function displayBooks() {
  const bookshelf = document.querySelector('.bookshelf');

  // Loop through each book (element) of array
  myLibrary.forEach( (element) => {
    console.log(element.title);
    // Create a new card on the bookshelf for each book
    const bookCard = document.createElement('div');
    bookCard.className.add = ('book-card');
    bookshelf.appendChild(bookCard);
    // For each book card, add text showing book info
    for (let key in myLibrary) {
      const info = document.createElement('p');
      info.className.add = ('book-info');
      info.textContent = key + myLibrary[key];
      console.log(key, myLibrary[key]);
      bookCard.appendChild(info);
    }

  })



  /* for (let i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement('div');
    bookCard.className.add = ('book-card');
    bookshelf.appendChild(bookCard);
  } */




}

displayBooks();