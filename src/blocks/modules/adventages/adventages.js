var adventagesButton = document.querySelector(".adventages__button");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup-overlay");

adventagesButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--active");
  popupOverlay.classList.add("popup-overlay--active");
});
