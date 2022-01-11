export function pushListItem(bookList, output) {
  let containId;
  let bookHtml = '';
  const booksArray = bookList;
  if (booksArray !== null) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
    <p class="book-name">"${item.book}" by ${item.author}</p><br><button class ="remButton" id=${item.id} type="button">Remove</button></li>`;
    });
    output.innerHTML = bookHtml;
  }
}