const textArea = document.getElementById("text-area");

textArea.addEventListener("input", () => {
  if (textArea.value !== "") {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
});
