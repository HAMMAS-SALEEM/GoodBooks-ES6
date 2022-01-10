export function pushListItem(bookList,output) {
  let bookHtml = '';
  const booksArray = bookList;
  if (booksArray !== null) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
    <p class="book-name">"${item.book}" by ${item.author}</p><br><button class ="removeButton" type="button" id=${item.id}>Remove</button></li>`;
    });
    output.innerHTML = bookHtml;
  }
}