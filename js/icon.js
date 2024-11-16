document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".js-icon-button");
  const svgUse = button.querySelector("use");

  button.addEventListener("click", () => {
    // Проверяем текущую иконку
    const currentIcon = svgUse.getAttribute("href");

    // Меняем иконку на другую
    if (currentIcon === "./images/icons.svg#icon-align-justify") {
      svgUse.setAttribute("href", "./images/icons.svg#icon-exit");
    } else {
      svgUse.setAttribute("href", "./images/icons.svg#icon-align-justify");
    }
  });
});
