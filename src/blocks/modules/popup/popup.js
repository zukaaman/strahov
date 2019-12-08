var popupButton = document.querySelector(".popup__button");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup-overlay");

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--active");
  popupOverlay.classList.remove("popup-overlay--active");
});

popupOverlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--active");
  popupOverlay.classList.remove("popup-overlay--active");
});
