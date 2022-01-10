const bookName = document.getElementById('name');
const author = document.getElementById('author');
const output = document.querySelector('.list-elements');
const form = document.querySelector('#form');

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

export function timeDate() {
  setInterval(() => {
    time.innerHTML = new Date();
  }, 100);
}

window.addEventListener('load', timeDate);

navList.addEventListener('click', () => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
  pushListItem();
});

navAdd.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
});

navContact.addEventListener('click', () => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
