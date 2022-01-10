const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const form = document.querySelector('#form');
let bookList = JSON.parse(localStorage.getItem('booksList'));

import {pushListItem} from "./modules/showbook.js"

window.addEventListener('load', ()=>{pushListItem(bookList,output)})

class Collection {
  constructor() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  getBooks() {
    if (localStorage.getItem('booksList') === null) {
      this.arr = [];
    } else {
      this.arr = JSON.parse(localStorage.getItem('booksList'));
    }
  }

  UpdateLocalStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  addBooks() {
    const bookObj = {
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    };
    this.arr.push(bookObj);
    this.UpdateLocalStorage();
    pushListItem(bookList,output)
  }

  setupArray() {
    this.arr = JSON.parse(localStorage.getItem('booksList'));
  }

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateLocalStorage();
    pushListItem(bookList,output)
  }
}

const collection = new Collection();

window.onload = () => {
  collection.getBooks();
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

import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const timeNow = DateTime.now();
time.textContent = timeNow.toLocaleString(DateTime.DATETIME_MED);

const showList = ()=>{
  showListSection(listSection, addSection, contactSection);
}

const showAdd = ()=>{
  showAddSection(listSection, addSection, contactSection)
}

const showContact = ()=>{
  showContactSection(listSection, addSection, contactSection)
}

navList.addEventListener('click', () => {
    showList();
    pushListItem(bookList,output)
});

navAdd.addEventListener('click', ()=>{
  showAdd()
});

navContact.addEventListener('click', ()=>{
  showContact();
});
