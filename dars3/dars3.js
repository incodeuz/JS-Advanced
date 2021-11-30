//Uygi vazifa 1
// function randomIntOldVersion() {
//     let args = Array.from(arguments)
//     console.log(Math.floor(args[0]+Math.random()*(args[1]-args[0])));
// }
// randomIntOldVersion(10,20)

//Uygi vazifa 2
function pullWidth() {
  if (document.querySelector(".container").style.float == "right")
    document.querySelector(".container").style.float = "left";
  else document.querySelector(".container").style.float = "right";
}

setInterval(pullWidth, 1000);
// document.querySelector(".container").addEventListener("click", pullWidth);
