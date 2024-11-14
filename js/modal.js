// Функция для открытия модального окна
function openModal(imageElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  modal.style.display = "block"; // Показываем модальное окно
  modalImg.src = imageElement.src; // Устанавливаем src изображения в модальное окно
}

// Функция для закрытия модального окна
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике на крестик
document.querySelector(".close").addEventListener("click", closeModal);
