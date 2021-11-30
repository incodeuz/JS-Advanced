const createBtn = document
.querySelector(".create")
.addEventListener("click", getStyle);
function getStyle() {
  const inputStyle = document.querySelector(".input-style").value;
  let box = document.querySelector(".box");
  let inputBg = document.querySelector(".input-bg").value;
  box.style.background = inputBg;

  if (inputStyle === 'round') {
    box.style.borderRadius = `50%`
  }

  let inputWidth = document.querySelector(".input-width").value;
  box.style.width = inputWidth;
  let inputHeight = document.querySelector(".input-height").value;
  box.style.height = inputHeight;
}
