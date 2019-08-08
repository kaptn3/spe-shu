const body = document.querySelector('body');
const modal = document.querySelector('.upload-modal');

const openModal = () => {
  body.classList.add('modal-open');
  modal.style.display = 'block';
  setTimeout(() => {
    modal.style.opacity = '1';
  }, 200)
}

const closeModal = () => {
  body.classList.remove('modal-open');
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 200)
}