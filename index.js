import  pushListItem  from './modules/showbook.js';

import  Collection  from './modules/addRemoveBtn.js';

import { showListSection, showAddSection, showContactSection } from './modules/dom.js';

import {DateTime} from './node_modules/luxon/build/es6/luxon.js';

const book = 'name';
const bookName = document.getElementById(book);
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const form = document.querySelector('#form');
let bList = JSON.parse(localStorage.getItem('booksList'));
const collection = new Collection(bList);

pushListItem(bList, output);

const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
  collection.addBooks(bookName, author);
  bList = JSON.parse(localStorage.getItem('booksList'));
  pushListItem(bList, output);
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

const timeNow = DateTime.now();
time.textContent = timeNow.toLocaleString(DateTime.DATETIME_MED);

navList.addEventListener('click', () => {
  showListSection(listSection, addSection, contactSection);
  pushListItem(bList, output);
});

navAdd.addEventListener('click', () => {
  showAddSection(listSection, addSection, contactSection);
});

navContact.addEventListener('click', () => {
  showContactSection(listSection, addSection, contactSection);
});

output.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    collection.removeBooks(e.target.id);
    bList = JSON.parse(localStorage.getItem('booksList'));
    pushListItem(bList, output);
  }
});