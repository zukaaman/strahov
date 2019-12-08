var courseButton = document.querySelector(".course__button");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup-overlay");

courseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--active");
  popupOverlay.classList.add("popup-overlay--active");
});
