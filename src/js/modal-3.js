(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-price-open]"),
    closeModalBtn: document.querySelector("[data-price-modal-close]"),
    modal: document.querySelector("[data-price-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
