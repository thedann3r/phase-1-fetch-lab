
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => resp.json()) 
    .then(data => {
      renderBooks(data)
    })
    .catch(error => console.log(error))
}

function renderBooks(books) {
  const list = document.getElementById('book-list')
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name
    list.appendChild(listItem)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks()
})