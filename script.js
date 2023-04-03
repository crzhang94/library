
// Empty array for storing book objects
let myLibrary = [];

// Constructor for making book objects
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    // function that can report the book info (from exercise)
    /* this.info = function() {
      return title + " by " + author + ", " + pages + " pages, " + readStatus;
    } */
}

// Function to store new book objects into library array
function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read-status").value;

  const newBook = new Book(title, author, pages, readStatus);
  console.log(newBook);

  // myLibrary.push(book);
}


// Bring form up when add new book button is pressed
let newBookButton = document.querySelector("#add-button");
newBookButton.addEventListener('click', function() {
  let newBookForm = document.querySelector("#book-form");
  newBookForm.style.display = "block";
})

// Form's add book button
document.querySelector("#book-form").addEventListener("submit", function() {
  event.preventDefault();
  addBookToLibrary();
})


// Form's cancel button
document.getElementById("cancel").addEventListener("click", function () {
  let newBookForm = document.querySelector("#book-form");
  newBookForm.style.display = "none";
  newBookForm.reset();
})


// Sample books - currently 3 books in the library w/o user input
addBookToLibrary('Cats', 'Me', 192, 'read');
addBookToLibrary('Cats', 'Me', 1922, 'read');
addBookToLibrary('Cats', 'Me', 1923, 'read');
addBookToLibrary('Cats', 'Me', 19233, 'read');
console.log(myLibrary.length);

// Function that loops through array and displays each book on the page
function displayBooks() {
  const bookshelf = document.querySelector('.bookshelf');

  // Loop through each book (element) of array
  myLibrary.forEach(myLibrary => {
    // Create a new card on the bookshelf for each book
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookshelf.appendChild(bookCard);
    // For each book card, add text showing book info
    for (let key in myLibrary) {
      const info = document.createElement('p');
      info.classList.add('book-info');
      info.textContent = key + ": " + myLibrary[key];
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