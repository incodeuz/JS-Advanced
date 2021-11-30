let getAgeBtn = document
  .querySelector(".btn")
  .addEventListener("click", getSumma);

var dollar = 15000;

function getSumma() {
  let getSum = document.querySelector(".input").value;
  var count = +getSum * dollar;
  document.querySelector(".innercha").innerHTML =
    "Hozirda siz kiritgan summa" + " " + count + " " + "som qiymatga ega";
}
