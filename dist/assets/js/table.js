const checkInput = document.querySelector('input[name="docs"]');
const checkboxes = document.querySelectorAll('input[name="doc"]');

const showButton = () => {
  let checked = 0;

  for (let k = 0; k < checkboxes.length; k++) {
    if (checkboxes[k].checked) checked++;
  }

  const height = checked === 0 ? '0' : '56px';
  document.querySelector('.download-btn').style.height = height;
};

if (checkInput && checkboxes) {
  checkInput.addEventListener('change', () => {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checkInput.checked;
    }

    showButton();
  });

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
      showButton();
    });
  }
}