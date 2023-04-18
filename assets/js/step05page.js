const customRadio = document.querySelectorAll(".custom-radio");

customRadio.forEach((element, index) => {
  element.addEventListener("click", () => {
    if ((element.checked = "true")) {
      next.disabled = false;
      next.addEventListener("click", () => {
        location.href = "end.html";
      });
    }
  });
});
