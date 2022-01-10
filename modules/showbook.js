 export function pushListItem() {
  let bookHtml = '';
  const booksArray = JSON.parse(localStorage.getItem('booksList'));
  if (booksArray !== null) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
    <p class="book-name">"${item.book}" by ${item.author}</p><br><button type="button" id=${item.id} onclick="collection.removeBooks(this.id)">Remove</button></li>`;
    });
    output.innerHTML = bookHtml;
  }
}