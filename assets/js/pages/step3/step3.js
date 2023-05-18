const step3Container = () => {
  const container = document.querySelector(".main-area__container");
  const template = `<h2 class="main-area__question">
    Ranqueie o quanto você se sente confortável com seu gestor imediato.
  </h2>

  <div class="main-area__box">
    <p class="timer">Tempo: 2:00 minutos</p>
    <a href="#step4" id="">Ignorar</a>
  </div>
  <div class="main-area__alternative">
    <ul class="rating">
      <li class="star-icon ativo" data-rating="1"></li>
      <li class="star-icon" data-rating="2"></li>
      <li class="star-icon" data-rating="3"></li>
      <li class="star-icon" data-rating="4"></li>
      <li class="star-icon" data-rating="5"></li>
    </ul>
  </div>`;

  container.innerHTML = template;
  return container;
};
const step3NxtBttn = () => {
  const star = document.querySelectorAll(".star-icon");

  star.forEach((element) => {
    element.addEventListener("click", () => {
      next.disabled = false;
    });
  });

  next.addEventListener("click", () => {
    location.href = "#step4";
    currentStep = 4;
    update();
  });
};

export const step3 = {
  step3Container,
  step3NxtBttn,
};
