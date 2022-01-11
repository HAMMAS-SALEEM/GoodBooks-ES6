export default function pushListItem(bookList, output) {
  let bookHtml = '';
  const booksArray = bookList;
  if (booksArray !== null || booksArray.lengnth !== 0) {
    booksArray.forEach((item) => {
      bookHtml += `<li class="list_item">
      <p class="book-name">"${item.book}" by ${item.author}</p><br><button class ="remButton" id=${item.id} type="button">Remove</button></li>`;
    })
  } else {
    bookHtml = '<li>No Book Avaiable</li>'
  }
  output.innerHTML = bookHtml;
}