document.querySelector(".buton").addEventListener("click", getLog);
function getLog() {
    let inputOne = document.querySelector(".inputbir").value;
    let inputTwo = document.querySelector(".inputikki").value;
    let inputThree = document.querySelector(".inputuch").value;
    if (inputOne == "rectangle") {
        for (let i = 1; i < +inputTwo; i++) {
      let output = "";
      for (let j = 1; j <= +inputTwo - i; j++) {
        output += "";
      }
      for (let k = 1; k <= i; k++) {
        output += inputThree;
      }
      console.log(output);
    }
  }
  for (let b = 1; b <= +inputTwo; ++b) {
    let pyramid = inputThree.repeat(b);
    console.log(pyramid);
  }
}
