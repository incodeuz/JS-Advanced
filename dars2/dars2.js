function name() {
    console.log(Array.from(arguments).reduce((item,value)=>{
        return item += value
    },0));
}
name(1,2,3)