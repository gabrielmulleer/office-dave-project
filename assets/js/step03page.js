const star = document.querySelectorAll(".star-icon");

star.forEach((element) => {
  element.addEventListener("click", () => {
    next.disabled = false;
  });
});

next.addEventListener("click", () => {
  location.href = "step4.html";
});
