const customRadio = document.querySelectorAll(".custom-radio");
const btnNext = document.getElementById("next");

customRadio.forEach((element, index) => {
  console.log(length);
  element.addEventListener("click", () => {
    if ((element.checked = "true")) {
      next.disabled = false;
      if (index < 4) {
        btnNext.addEventListener("click", () => {
          location.href = "step1-msg.html";
        });
      } else {
        btnNext.addEventListener("click", () => {
          location.href = "step2.html";
        });
      }
    }
  });
});
