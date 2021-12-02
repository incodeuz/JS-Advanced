document.querySelector(".buton").addEventListener("click", getLog);
function getLog() {
  let inputOne = document.querySelector(".inputbir").value;
  let inputTwo = document.querySelector(".inputikki").value;
  let inputThree = document.querySelector(".inputuch").value;
  if (inputOne === "triangle") {
    let string = "";
    for (let i = 1; i <= inputTwo; i++) {
      for (let j = 1; j <= inputTwo - i; j++) {
        string += " ";
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        string += inputThree;
      }
      string += "\n";
    }
    console.log(string);
  }
  for (let b = 1; b <= +inputTwo; ++b) {
    let pyramid = inputThree.repeat(b);
    console.log(pyramid);
  }
}
