const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const form = document.querySelector('#form');
let bookList = JSON.parse(localStorage.getItem('booksList'));

import {pushListItem} from "./modules/showbook.js"
const pushLiItem = ()=>{
    pushListItem(bookList,output)
}

window.addEventListener('load', pushLiItem)

// import { Collection } from "./modules/book.js"

class Collection {
  constructor() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  // class to check array items in the local storage

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr = [];
    } else {
      this.arr = bookList;
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
    pushLiItem();
  }

  setupArray() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  // class to remove items from array and display them

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushLiItem();
  }
}

const collection = new Collection();

// window onload function to get array items from the local storage and display them

window.onload = () => {
  collection.getBooks();
  // pushListItem();
};

const addBtn = document.querySelector('.addBtn');

// event listener to trigger add class

addBtn.addEventListener('click', () => {
  collection.getBooks();
  collection.addBooks();
  form.reset();
});

// NAVIGATION variables

const navList = document.getElementById('nav-list');
const navAdd = document.getElementById('nav-add');
const navContact = document.getElementById('nav-contact');
const listSection = document.getElementById('list');
const addSection = document.getElementById('add-book');
const contactSection = document.getElementById('contact');
const time = document.getElementById('time');

import { showListSection, showAddSection, showContactSection } from "./modules/dom.js"

const showList = () => {
  showListSection(listSection, addSection, contactSection)
}

const showAdd = () => {
  showAddSection(listSection, addSection, contactSection)
}

const showContact = () => {
  showContactSection(listSection, addSection, contactSection)
}

function timeDate() {
  setInterval(() => {
    time.innerHTML = new Date();
  }, 100);
}

window.addEventListener('load', timeDate);

navList.addEventListener('click', () => {
  showList();
  pushLiItem();
});

navAdd.addEventListener('click', showAdd);

navContact.addEventListener('click', showContact);