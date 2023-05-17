const step2Container = () => {
  const container = document.querySelector(".main-area__container");
  const template = `<h2 class="main-area__question">Você se sente confortável com seus colegas de trabalho.</h2>
  <div class="main-area__box">
      <p class="timer">Tempo: 2:00 minutos</p>
      <a href="#" id="prev">Ignorar</a>
  </div>
  <div class="main-area__alternative_step2">
      <div class="radio__box"><label><input type="radio" name="concordancia" id="" class="custom-radio__step2">Nem um
              pouco!</label></div>
      <div class="radio__box"><label><input type="radio" name="concordancia" id="" class="custom-radio__step2">Não
              muito!</label></div>
      <div class="radio__box"><label><input type="radio" name="concordancia" id="" class="custom-radio__step2">Em
              partes</label></div>
      <div class="radio__box"><label><input type="radio" name="concordancia" id="" class="custom-radio__step2">Sim,
              com certeza!</label></div>
  </div>`;

  container.innerHTML = template;
  return container;
};
const step2NxtBttn = () => {
  const customRadio = document.querySelectorAll(".custom-radio__step2");

  customRadio.forEach((element, index) => {
    console.log(length);
    element.addEventListener("click", () => {
      if ((element.checked = "true")) {
        next.disabled = false;
        if (index < 3) {
          next.addEventListener("click", () => {
            location.href = "#step2-msg";
            currentStep = 2;
            update();
          });
        } else {
          next.addEventListener("click", () => {
            location.href = "#step3";
            currentStep = 3;
            update();
          });
        }
      }
    });
  });
};
const step2MsgContainer = () => {
  const container = document.querySelector(".main-area__container");
  const template = `
    <h2 class="main-area__question">Você se sente confortável com seus colegas de trabalho.
    </h2>

    <div class="main-area__box">
        <div class="main-area__user"><img src="./assets/img/icon_anonimous.svg" alt="Anonimous Icon">
            <p>Usuário Anônimo</p>
        </div>
        <a href="#" id="prev">Ignorar</a>
    </div>
    <div class="main-area__alternative-text">
        <label for="text-area" class="text-area__question">O que poderia ser melhor para que você se
            sentisse mais confortável no
            trabalho?
            <textarea name="text-area" id="text-area" class="main-area__text-area" cols="30" rows="10"
                placeholder="Escreva seus pensamentos aqui..."></textarea></label>
    </div>`;

  container.innerHTML = template;
  return container;
};
const step2MsgNxtBttn = () => {
  const textArea = document.getElementById("text-area");

  textArea.addEventListener("input", () => {
    if (textArea.value !== "") {
      next.disabled = false;
    } else {
      next.disabled = true;
    }
  });

  next.addEventListener("click", () => {
    if (location.hash === "#step2-msg") {
      location.href = "#step3";
      currentStep = 3;
      update();
    }
  });
};

const step2Checkbox = () => {
  const customRadio = document.querySelectorAll(".custom-radio__step2");
  const radioBox = document.querySelectorAll(".radio__box");
  customRadio.forEach((element, index) => {
    element.addEventListener("click", () => {
      if (element.checked) {
        radioBox.forEach((element) => {
          element.classList.remove("radio__box-active");
        });
        radioBox[index].classList.add("radio__box-active");
      }
    });
  });
};

export const step2 = {
  step2Container,
  step2NxtBttn,
  step2MsgContainer,
  step2MsgNxtBttn,
  step2Checkbox,
};
