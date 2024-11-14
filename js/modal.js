// Открытие модального окна
function openModal(imageElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = imageElement.src;  // Копируем src изображения в модальное окно
}

// Закрытие модального окна
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
