const step5Container = () => {
  const container = document.querySelector(".main-area__container");
  const template = `
  <h2 class="main-area__question">
  Você se sente fisicamente seguro quando está no trabalho?
</h2>
<div class="main-area__box">
  <p class="timer">Tempo: 2:00 minutos</p>
  <a href="end.html" id="">Ignorar</a>
</div>
<div class="main-area__alternative">
  <label
    ><input
      type="radio"
      name="concordancia"
      id=""
      class="custom-radio__step5"
    />Discordo Totalmente</label
  >
  <label
    ><input
      type="radio"
      name="concordancia"
      id=""
      class="custom-radio__step5"
    />Discordo</label
  >
  <label
    ><input
      type="radio"
      name="concordancia"
      id=""
      class="custom-radio__step5"
    />Neutro</label
  >
  <label
    ><input
      type="radio"
      name="concordancia"
      id=""
      class="custom-radio__step5"
    />Concordo</label
  >
  <label
    ><input
      type="radio"
      name="concordancia"
      id=""
      class="custom-radio__step5"
    />Concordo Totalmente</label
  >
</div>
    `;

  container.innerHTML = template;
  return container;
};

const step5NxtBttn = () => {
  const customRadio = document.querySelectorAll(".custom-radio__step5");

  customRadio.forEach((element, index) => {
    element.addEventListener("click", () => {
      if ((element.checked = "true")) {
        next.disabled = false;
        next.addEventListener("click", () => {
          location.href = "end.html";
          currentStep = 6;
          update();
        });
      }
    });
  });
};

export const step5 = {
  step5Container,
  step5NxtBttn,
};
