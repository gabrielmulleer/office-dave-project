const customRadio = document.querySelectorAll(".custom-radio");

customRadio.forEach((element, index) => {
  console.log(length);
  element.addEventListener("click", () => {
    if ((element.checked = "true")) {
      next.disabled = false;
      if (index < 4) {
        next.addEventListener("click", () => {
          location.href = "step1-msg.html";
        });
      } else {
        next.addEventListener("click", () => {
          location.href = "step2.html";
        });
      }
    }
  });
});
