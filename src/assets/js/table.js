const checkInput = document.querySelector('input[name="docs"]');

if (checkInput) {
  checkInput.addEventListener('change', () => {
    const checkboxes = document.querySelectorAll('input[name="doc"]');

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checkInput.checked;
    }
  });
}