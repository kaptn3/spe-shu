const body = document.querySelector('body');
const modal = document.querySelector('.upload-modal');

const openModal = () => {
  body.classList.add('modal-open');
  modal.style.display = 'block';
}

const closeModal = () => {
  body.classList.remove('modal-open');
  modal.style.display = 'none';
}