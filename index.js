const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const form = document.querySelector('#form');
let bookList = JSON.parse(localStorage.getItem('booksList'));

import {pushListItem} from "./modules/showbook.js"

window.addEventListener('load', ()=>{pushListItem(bookList,output)})
import {Collection} from './modules/addRemoveBtn.js'
const collection = new Collection(bookList);
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
  collection.addBooks(bookName,author)
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
