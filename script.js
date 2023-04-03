let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  
  displayBooks();
}

// Bring form up when "add new book" button is pressed
let newBookButton = document.querySelector("#add-button");
newBookButton.addEventListener('click', function() {
  let newBookForm = document.querySelector("#book-form");
  newBookForm.style.display = "block";
})

// Form: add book button
let newBookForm = document.querySelector("#book-form");
let addBook = document.getElementById("add-book");
addBook.addEventListener("click", function(event) {
  event.preventDefault();
  addBookToLibrary();
  newBookForm.style.display = "none";
  newBookForm.reset(); 
})


// Form: cancel button
document.getElementById("cancel").addEventListener("click", function (event) {
  event.preventDefault();
  let newBookForm = document.querySelector("#book-form");
  newBookForm.style.display = "none";
  newBookForm.reset();
})

function displayBooks() {
  const bookshelf = document.querySelector(".bookshelf");
  bookshelf.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let bookCard = document.createElement("div");
      bookCard.setAttribute("class", "book-card");
      bookCard.innerHTML = `
        <div class = "card-title"><b>${book.title}</b></div>
        <div class = "card-author">${book.author}</div>
        <div class = "card-pages">${book.pages} pages</div>
        <div class = "card-read">${book.read}</div>

        <button class ="remove-book" onclick ="removeBook(${i})">Remove</button>
        <button class ="toggle-read" onclick ="toggleRead(${i})">Toggle Read</button>
        `;
      bookshelf.appendChild(bookCard);
  }
}

function removeBook(i) {
  myLibrary.splice(i, 1)
  displayBooks();
}

Book.prototype.toggleRead = function() {
  if (this.read = "Read") {
    this.read = "Not read yet";
  }
  else {
    this.read = "Read";
  }
}

function toggleRead(i) {
  myLibrary[i].toggleRead();
  displayBooks();
}

// TO DO
// Fix toggle from not read to read
// Fix form being a sticky
// Fix header position