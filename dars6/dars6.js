const createBtn = document
  .querySelector(".create")
  .addEventListener("click", getStyle);
function getStyle() {
  const inputStyle = document.querySelector(".input-style").value;
  let inputRadiusCon = document.querySelector(".inputlar");
  let radiusTLSide = document.querySelector(".top-left-s").value;
  let radiusTRSide = document.querySelector(".top-right-s").value;
  let radiusBRSide = document.querySelector(".bottom-right-s").value;
  let radiusBLSide = document.querySelector(".bottom-left-s").value;
  let iSRadius = document.querySelector(".radius");
  let iSRadiusValue = document.querySelector(".radius").value;
  let box = document.querySelector(".box");

  let inputBg = document.querySelector(".input-bg").value;
  box.style.background = inputBg;

  if ((inputRadiusCon.style.visibility = "visible")) {
    box.style.borderTopLeftRadius = radiusTLSide;
  }
  if ((inputRadiusCon.style.visibility = "visible")) {
    box.style.borderTopRightRadius = radiusTRSide;
  }
  if ((inputRadiusCon.style.visibility = "visible")) {
    box.style.borderBottomRightRadius = radiusBRSide;
  }
  if ((inputRadiusCon.style.visibility = "visible")) {
    box.style.borderBottomLeftRadius = radiusBLSide;
  }

  if (inputStyle === "round") {
    box.style.borderRadius = `50%`;
  }

  if (inputStyle === "other") {
    iSRadius.style.visibility = `visible`;
  } else {
    iSRadius.style.visibility = `hidden`;
  }

  if (iSRadius.style.visibility === "visible") {
    box.style.borderRadius = iSRadiusValue;
  }

  if (iSRadiusValue === "other") {
    inputRadiusCon.style.visibility = "visible";
  } else {
    inputRadiusCon.style.visibility = "hidden";
  }

  let inputWidth = document.querySelector(".input-width").value;
  box.style.width = inputWidth;
  let inputHeight = document.querySelector(".input-height").value;
  box.style.height = inputHeight;
}
