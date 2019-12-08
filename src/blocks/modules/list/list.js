var listListButton = document.querySelector(".list__list-button");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup-overlay");

listListButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup--active");
  popupOverlay.classList.add("popup-overlay--active");
});
