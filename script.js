// Open modal with the keyboard name injected in the text
function openModal(productName) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  modalText.textContent = `You selected: ${productName}.`;
  modal.style.display = 'block';
}

// Close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
