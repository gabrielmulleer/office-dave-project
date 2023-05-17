export const timer = () => {
  let duration = 2 * 60;

  const display = document.querySelector(".timer");

  const timer = (duration, display) => {
    let timer = duration;
    let minutes, seconds;

    let interval = setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      // console.log(timer);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.innerHTML = `Tempo: ${minutes}:${seconds}`;

      timer -= 1;

      if (timer < 0) {
        alert("Tempo encerrado.");
        clearInterval(interval);
      }
    }, 1000);
  };
  timer(duration, display);
};
