document.querySelector(".btncha").addEventListener("click", getValue);

function getValue() {
  let input = document.querySelector(".inputValue").value;
  var century = Math.floor(input / 100) + 1;
  document.querySelector('.tegcha').innerHTML=`Kiritgan yilingiz ${century}-chi asrga teng`
//   return century;
}
