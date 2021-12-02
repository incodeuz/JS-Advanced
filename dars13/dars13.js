document.querySelector(".buton").addEventListener("click", getLog);
function getLog() {
  let inputOne = document.querySelector(".inputbir").value;
  let inputTwo = document.querySelector(".inputikki").value;
  let inputThree = document.querySelector(".inputuch").value;
  if (inputOne === "triangle") {
    let n = 15;
    let string = "";
    // External loop
    for (let i = 1; i <=n; i++) {
      // printing spaces
      for (let j = 1; j <= n - i; j++) {
        string += " ";
      }
      // printing star
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
