/* Detail Popup Window */

const popGenrato = () => {
  // Open comments popup
  const opnPopBtn = document.querySelectorAll('[data-modal-target]');
  opnPopBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dialogContainer = document.querySelector(btn.dataset.modalTarget);
      document.body.classList.add('no-scroll');
      dialogContainer.classList.add('dialog-container');
      dialogContainer.showModal();
    });
  });
  // Close comments popup
  const closeButton = document.querySelectorAll('[data-close-button]');
  closeButton.forEach((btnC) => {
    btnC.addEventListener('click', () => {
      const popup = btnC.closest('.dialog-container');
      const dialogContainer = document.querySelector('.dialog-container');
      popup.close();
      dialogContainer.classList.remove('dialog-container');
      document.body.classList.remove('no-scroll');
    });
  });
};

export default popGenrato;
