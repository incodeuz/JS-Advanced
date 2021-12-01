const createBtn = document
  .querySelector(".create")
  .addEventListener("click", getStyle);
function getStyle() {
  const inputStyle = document.querySelector(".input-style").value;
  let inputWidth = document.querySelector(".input-width").value;
  let inputBg = document.querySelector(".input-bg").value;
  let inputHeight = document.querySelector(".input-height").value;
  let box = document.querySelector(".box");
  box.style.background = inputBg;
  box.style.width = inputWidth;
  box.style.height = inputHeight;
  if (inputStyle === "round") {
    box.style.borderRadius = `50%`;
  }
}
