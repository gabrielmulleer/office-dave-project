// DOM Elements
const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("indicator");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const answer = document.querySelectorAll(".answer");

let currentStep = 1;

// next.addEventListener("click", () => {
//   currentStep++;
//   if (currentStep > circles.length) {
//     currentStep = circles.length;
//   }
//   update();
// });

// prev.addEventListener("click", () => {
//   currentStep--;
//   if (currentStep < 1) {
//     currentStep = 1;
//   }
//   update();
// });

function update() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  if (currentStep != 1) {
    circles[currentStep - 2].innerHTML = "✔";
    circles[currentStep - 2].style.background = "#4996BB";
    circles[currentStep - 2].style.color = "white";

    answer[currentStep - 2].style.fontStyle = "italic";
    answer[currentStep - 2].innerHTML = "Respondido!";
  }

  const actives = document.querySelectorAll(".active");

  progressBar.style.height = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentStep === 1) {
    prev.disabled = true;
  } else if (currentStep === circles.length) {
      next.disabled = true;
  } else {
    next.disabled = false;
  }
}
