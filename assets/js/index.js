import { step1 } from "./pages/step1/step1.js";
import { step2 } from "./pages/step2/step2.js";
import { step3 } from "./pages/step3/step3.js";
import { step4 } from "./pages/step4/step4.js";
import { step5 } from "./pages/step5/step5.js";
// import { timer } from "./timer.js";
import { starRating } from "./star-rating.js";
// import step1MSG from "./pages/step1/step1MSG.js";
// import step2MSG from "./pages/step2/step2MSG.js";

const main = document.querySelector("#root");
const mainArea = document.querySelector(".main-area__container");

const init = () => {
  window.addEventListener("hashchange", () => {
    mainArea.innerHTML = "";
    next.disabled = true;
    switch (window.location.hash) {
      case "":
        main.appendChild(step1.step1Container());
        step1.step1NxtBttn();
        // timer();
        break;
      case "#step1-msg":
        main.appendChild(step1.step1MsgContainer());
        console.log(window.location.hash);
        step1.step1MsgNxtBttn();
        // timer();
        break;
      case "#step2":
        main.appendChild(step2.step2Container());
        console.log(window.location.hash);
        step2.step2Checkbox();
        step2.step2NxtBttn();
        // timer();
        break;
      case "#step2-msg":
        main.appendChild(step2.step2MsgContainer());
        console.log(window.location.hash);
        step2.step2MsgNxtBttn();
        // timer();
        break;
      case "#step3":
        main.appendChild(step3.step3Container());
        console.log(window.location.hash);
        step3.step3NxtBttn();
        starRating();
        // timer();
        break;
      case "#step4":
        main.appendChild(step4.step4Container());
        console.log(window.location.hash);
        step4.step4NxtBttn();
        // timer();
        break;
      case "#step5":
        main.appendChild(step5.step5Container());
        console.log(window.location.hash);
        step5.step5NxtBttn();
        // timer();
        break;
      default:
        main.appendChild(step1.step1Container());
        step1.step1NxtBttn();
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(step1.step1Container());
  step1.step1NxtBttn();

  init();
  // timer();
});
