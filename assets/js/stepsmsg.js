const textArea = document.getElementById("text-area");

textArea.addEventListener("input", () => {
  if (textArea.value !== "") {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
});

next.addEventListener("click", () => {
  if (location.pathname === "/step1-msg.html") {
    location.href = "step2.html";
  } else if (location.pathname === "/step2-msg.html") {
    location.href = "step3.html";
  }
});
