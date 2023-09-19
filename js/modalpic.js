
let currentModalImg;

function openModal(imageUrl) {
  const modal = document.querySelector('.basicmodal');
  const modalImg = modal.querySelector('.basicmodal-content');
  const closeModalBtn = modal.querySelector('.basicclose');

  modalImg.src = imageUrl; 

  modal.style.display = 'block';

  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
}

function closeModal() {
  const modal = document.querySelector('.basicmodal');
  const closeModalBtn = modal.querySelector('.basicclose');

  modal.style.display = 'none';
  closeModalBtn.removeEventListener('click', closeModal);
  window.removeEventListener('click', outsideClick);
}

// function outsideClick(e) {
//   const modal = document.querySelector('.basicmodal');
//   if (e.target === modal) {
//     closeModal();
//   }
// }
function outsideClick(e) {
  const modal = document.querySelector('.basicmodal');
  if (e.target === modal || modal.contains(e.target)) {
      closeModal();
  }
}


