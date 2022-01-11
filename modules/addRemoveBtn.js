export class Collection {
    constructor(bList) {
      this.arr = bList
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
      if(this.arr==null || this.arr.length==0) {
        this.arr = [];
        this.arr.push(bookObj);
      } else {
        this.arr.push(bookObj);
      }
      this.UpdateLocalStorage();
    }
  
    removeBooks(id) {
      this.arr = this.arr.filter((e) => e.id !== id);
      this.UpdateLocalStorage();
    }
  }