document.querySelector(".btn").addEventListener("click", getValue);
function getValue() {
  let input1 = document.querySelector(".inputbir").value;
  let input2 = document.querySelector(".inputikki").value;
  document.querySelector(".content").style.display = "flex";
  document.querySelector(".text").innerHTML = `bir ${input1}, ikki ${input2}`;
  document.querySelector(".btn2").addEventListener("click", getValue2);

  function getValue2() {
    let p = document.createElement("p");
    p.innerHTML = ` endi esa birinchi ${input2}, ikkinchi esa ${input1}`;
    document.body.appendChild(p)
  }
}
