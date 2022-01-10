class Collection {
  constructor() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  // class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem('booksList'));
    }
  }

  // class to update array in the local storage

  UpdateLocalStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  // class to push items into array and display them

  addBooks() {
    const bookObj = {
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    };
    this.arr.push(bookObj);
    this.UpdateLocalStorage();
    pushListItem();
  }

  setupArray() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  // class to remove items from array and display them

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushListItem();
  }
}