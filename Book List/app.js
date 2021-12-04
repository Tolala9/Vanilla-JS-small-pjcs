// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI constructor
function UI() {

}

UI.prototype.addBookToList = (book) => {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.clearFields = () => {
    document.getElementById('title').value = '',
    document.getElementById('isbn').value = '',
    document.getElementById('author').value = '';
}

document.getElementById('book-form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value,
        isbn = document.getElementById('isbn').value,
        author = document.getElementById('author').value;


const book = new Book(title, author, isbn);

const ui = new UI();

ui.addBookToList(book);
ui.clearFields();


  e.preventDefault();
});
