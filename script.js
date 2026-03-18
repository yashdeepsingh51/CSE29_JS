console.log("HELLO WORLD");
document.write("This is my first javascript page");

//javascript primitive values type

//number
var num=10;
console.log(num);
console.log(typeof(num));

//boolean
num=false;
console.log(num);
console.log(typeof(num));

//null
num=null;
console.log(num);
console.log(typeof(num));

//undefined
num=undefined;
console.log(num);
console.log(typeof(num));

//string
num="Yashdeep";
console.log(num);
console.log(typeof(num));

const sym1 = Symbol(4)
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}