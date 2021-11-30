//DECLARATION function
//funksiyadagi oddiy hol , eng kop ishlatiladigan.
function declarationFunction (name){
    console.log(`Hello I'm a `, name);
}
declarationFunction(`Declaration Function`)


// EXPRESSION function
//bu funksiyada biz , fnksiyani bitta o'zgaruvchiga biriktirib olamiz.
var expressionFunction = function(name){
    console.log(`Hello I'm a `,name);
}
expressionFunction(`Expression Function`)


//ARROW function
//arrow funksiyasida 'funksiya' yozilmaydi ,yani arrow funksiya orqali nomini berib ketiladi

const arrowFunction = (name) => {
    console.log(`hello i'm ` , name);
}
arrowFunction(`Arrow function`)


