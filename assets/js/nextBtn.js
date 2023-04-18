next.addEventListener("click", () => {
  const mainAreaTitle = document.querySelector("main-area__container");
  const textAreaQuestion = document.querySelector("text-area__question");

  if (location.pathname === "/step1.html") {
    location.href = "step1-msg.html";

    mainAreaTitle.innerText = "Você se sente seguro no ambiente de trabalho?";
    textAreaQuestion.innerText =
      "O que poderia ser melhor para que você se sentisse mais seguro no trabalho?";
  }
  if (location.pathname === "/step2.html") {
    location.href = "step1-msg.html";
    mainAreaTitle.innerText =
      "Você se sente confortável com seus colegas de trabalho.";
    textAreaQuestion.innerText =
      "O que poderia ser melhor para que você se sentisse mais confortável no trabalho?";
  }
});
