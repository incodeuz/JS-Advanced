document.querySelector('.button').addEventListener('click', getSpeed)

function getSpeed() {
    let masofa = document.querySelector('.inpbir').value
    let vaqt = document.querySelector('.inpikki').value
    document.querySelector('.text').innerHTML=`Sizning nmasofangiz ${masofa}km , vaqtingiz esa ${vaqt}s/m , = tezligingiz esa  ${masofa/vaqt}km/s ga teng`
}