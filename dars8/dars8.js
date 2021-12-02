const getOverall = document
  .querySelector(".btn")
  .addEventListener("click", getAge);
function getAge() {
  let getYear = new Date().getFullYear();
  let value = document.querySelector(".input").value;
  document.querySelector(".textcha").innerHTML =
    "Sizning yoshingiz hozirda " + (getYear - value) + " " + "yoshda";
}
