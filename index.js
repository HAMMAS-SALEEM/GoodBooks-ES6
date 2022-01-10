addBtn.addEventListener('click', () => {
  collection.getBooks();
  collection.addBooks();
  form.reset();
});

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