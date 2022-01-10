export function pushListItem(bookList,output) {
  let bookHtml = '';
  const booksArray = bookList;
  if (booksArray !== null) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
    <p class="book-name">"${item.book}" by ${item.author}</p><br><button type="button" id=${item.id} onclick="collection.removeBooks(this.id)">Remove</button></li>`;
    });
    output.innerHTML = bookHtml;
  }
} 