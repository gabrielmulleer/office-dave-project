const slider = document.getElementById("myRange");

slider.addEventListener("input", () => {
  next.disabled = false;
  next.addEventListener("click", () => {
    location.href = "step5.html";
  });
});
