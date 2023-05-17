const step4Container = () => {
  const container = document.querySelector(".main-area__container");
  const template = `
<h2 class="main-area__question">
O quão satisfeito você está com a transparência da liderança no seu
trabalho?
</h2>

<div class="main-area__box">
<p class="timer">Tempo: 2:00 minutos</p>
<a href="#" id="prev">Ignorar</a>
</div>
<div class="main-area__alternative">
<input
  type="range"
  min="0"
  max="100"
  value="0"
  class="slider"
  id="myRange"
  />
`;

  container.innerHTML = template;
  return container;
};

const step4NxtBttn = () => {
  const slider = document.getElementById("myRange");

  slider.addEventListener("input", () => {
    next.disabled = false;
    next.addEventListener("click", () => {
      location.href = "#step5";
      currentStep = 5;
      update();
    });
  });
};

export const step4 = {
  step4Container,
  step4NxtBttn,
};
