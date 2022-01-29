let retry = document.querySelector(".retry");
let cancelIcon = document.querySelector(".icon");
let show = document.querySelector(".snackbar");

retry.addEventListener("click", () => {
  show.textContent = `Retrying...`;
});

cancelIcon.addEventListener("click", () => {
  show.style.display = "none";
});

show.scrollIntoView();
