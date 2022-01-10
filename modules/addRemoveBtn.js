export class Collection {
    constructor(dataStore) {
      this.arr = dataStore;
    }
  
    getBooks(dataStore) {
      if (dataStore === null) {
        this.arr = [];
      } else {
        this.arr = dataStore;
      }
    }
  
    UpdateLocalStorage() {
      localStorage.setItem('booksList', JSON.stringify(this.arr));
    }
  
    addBooks(bookName,author) {
      const bookObj = {
        id: new Date().getTime().toString(),
        book: bookName.value,
        author: author.value,
      };
      this.arr.push(bookObj);
      this.UpdateLocalStorage();
    }
  
    removeBooks(id) {
      this.arr = this.arr.filter((e) => e.id !== id);
      this.UpdateLocalStorage();
    }
  }