const btn = document.querySelector('.header__profile');
const popup = btn.querySelector('.popup');
let isOpen = false;
btn.addEventListener('click', () => {
  if (isOpen) {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }

  isOpen = !isOpen;
});