export const showListSection = (listSection, addSection, contactSection) => {
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

export const showAddSection = (listSection, addSection, contactSection) => {
  listSection.style.display = 'none';
  addSection.style.display = 'block';
  contactSection.style.display = 'none';
};

export const showContactSection = (listSection, addSection, contactSection) => {
  listSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
};
