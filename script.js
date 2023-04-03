let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readStatus = document.getElementById("read-status").value;

  const newBook = new Book(title, author, pages, readStatus);
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
document.querySelector("#book-form").addEventListener("submit", function() {
  event.preventDefault();
  addBookToLibrary();
})

// Form: cancel button
document.getElementById("cancel").addEventListener("click", function () {
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
        <div class = "card-read-status">${book.readStatus}</div>

        <button class ="remove-book" onclick ="removeBook(${i})">Remove</button>
        `;
      bookshelf.appendChild(bookCard);
  }
}

function removeBook(i) {
  myLibrary.splice(i, 1)
  displayBooks();
}


// TO DO
// Fix bug where cancelling out of the form saves a blank book