let numString = "258";

for (let i = 0; i < numString.length; i++) {
   const element =+numString[i];
   if (element%2!==0) {
     
     console.log(element);
   }else{
     console.log(+numString);
   }
}