class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  clearFields() {
    document.getElementById('title').value = '',
      document.getElementById('isbn').value = '',
      document.getElementById('author').value = '';
  }

  showAlert(msg, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteElement(element) {
    if (element.className === 'delete') {
      element.parentElement.parentElement.remove();
    }
  }

}



document.getElementById('book-form').addEventListener('submit', (e) => {
  const title = document.getElementById('title').value,
    isbn = document.getElementById('isbn').value,
    author = document.getElementById('author').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();


  if (title === '') {
    ui.showAlert('Please add the title', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('The book has been added', 'success');
  }
  ui.clearFields();

  e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  const ui = new UI();
  ui.deleteElement(e.target);
  ui.showAlert('The book has been deleted', 'success');
  e.preventDefault();
});
