let btncha = document
  .querySelector(".buttoncha")
  .addEventListener("click", getValue);

function getValue() {
  let firstInput = document.querySelector(".inputTek").value;
  let secondInput = document.querySelector(".inputTeg").value;
  document.querySelector(".textInner").innerHTML = `Birinchi qiymat === '${firstInput}'  ,  bu esa === '${secondInput}' ikkinchi`;
}
