const step1Container = () => {
  const container = document.querySelector(".main-area__container");

  const template = `
  
  <h2 class="main-area__question">
    Você se sente seguro no ambiente de trabalho?
  </h2>
  <div class="main-area__box">
    <p class="timer">Tempo: 2:00 minutos</p>
    <a href="#" id="prev">Ignorar</a>
  </div>
  <div class="main-area__alternative">
    <label
      ><input
        type="radio"
        name="concordancia"
        id=""
        class="custom-radio"
      />Discordo Totalmente</label
    >
    <label
      ><input
        type="radio"
        name="concordancia"
        id=""
        class="custom-radio"
      />Discordo</label
    >
    <label
      ><input
        type="radio"
        name="concordancia"
        id=""
        class="custom-radio"
      />Neutro</label
    >
    <label
      ><input
        type="radio"
        name="concordancia"
        id=""
        class="custom-radio"
      />Concordo</label
    >
    <label
      ><input
        type="radio"
        name="concordancia"
        id=""
        class="custom-radio"
      />Concordo Totalmente</label
    >
  </div>
`;

  container.innerHTML = template;
  return container;
};

const step1NxtBttn = () => {
  const customRadio = document.querySelectorAll(".custom-radio");
  customRadio.forEach((element, index) => {
    element.addEventListener("click", () => {
      if ((element.checked = "true")) {
        next.disabled = false;
        if (index < 4) {
          next.addEventListener("click", () => {
            location.href = "#step1-msg";
            next.disabled = true;
            currentStep = 1;
            update();
          });
        } else {
          next.addEventListener("click", () => {
            location.href = "#step2";
            next.disabled = true;
            currentStep = 2;
            update();
            if (circles[currentStep - 2].classList.contains("active")) {
              circles[currentStep - 2].innerHTML = "✔";
            }
          });
        }
      }
    });
  });
};

const step1MsgContainer = () => {
  const container = document.querySelector(".main-area__container");

  const template = `<h2 class="main-area__question">Você se sente seguro no ambiente de trabalho?</h2>

  <div class="main-area__box">
      <div class="main-area__user"><img src="./assets/img/icon_anonimous.svg" alt="Anonimous Icon">
          <p>Usuário Anônimo</p>
      </div>
      <a href="#" id="prev">Ignorar</a>
  </div>
  <div class="main-area__alternative-text">
      <label for="text-area" class="text-area__question">O que poderia ser melhor para que você se
          sentisse mais seguro no
          trabalho?
          <textarea name="text-area" id="text-area" class="main-area__text-area" cols="30" rows="10"
              placeholder="Escreva seus pensamentos aqui..."></textarea></label>
  </div>`;

  container.innerHTML = template;
  return container;
};

const step1MsgNxtBttn = () => {
  const textArea = document.getElementById("text-area");

  textArea.addEventListener("input", () => {
    if (textArea.value !== "") {
      next.disabled = false;
    } else {
      next.disabled = true;
    }
  });

  next.addEventListener("click", () => {
    if (location.hash === "#step1-msg") {
      location.href = "#step2";
      currentStep = 2;
      update();
    } else if (location.hash === "#step2-msg") {
      location.href = "#step3";
      currentStep = 3;
      update();
    }
  });
};

export const step1 = {
  step1Container,
  step1NxtBttn,
  step1MsgContainer,
  step1MsgNxtBttn,
};
