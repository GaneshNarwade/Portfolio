function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const openPopupButtons = document.querySelectorAll('.open-popup');
const popups = document.querySelectorAll('.popup');
const closePopupButtons = document.querySelectorAll('.close-popup');

openPopupButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popups.forEach((popup) => {
      popup.style.display = 'none';
    });
    popups[index].style.display = 'block';
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popups.forEach((popup) => {
      popup.style.display = 'none';
    });
  });
});