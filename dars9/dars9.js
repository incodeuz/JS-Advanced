const btn = document.querySelector(".btn").addEventListener("click", getCenter);

function getCenter() {
  let firstInt = document.querySelector(".birinchi").value;
  let secondInt = document.querySelector(".ikkinchi").value;
  let text2 = document.querySelector('.text2')
  if (text2.style.display='flex') {
      text2.style.display='flex'
  }
document.querySelector('.text2').innerHTML=`ikkala qiymatning o'rta arifmetigi - ''${(+firstInt +  +secondInt)/2} '' - teng!`
}
