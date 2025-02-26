//variable

//var
var x = 1;//variable decler & function scope
var x = 2;//it can be decler multi time in program
console.log(x);//can be rewrite

//let
let y = 1;//block variable
y = 2;//cant be decler the same varible
console.log(y);//can be rewite

//const
const z = 2;//constant variable
console.log(z);//cant be rewrite

//Scope

//global scope
var A = 1;
let B = 2;
const C = 3;

//local scope
 
//1. block scope
{
    let B = 4;
    console.log(B);
}

//2. function scope
function func(){
    const C = 6;
    console.log(C);
}
func();
console.log(A);
console.log(B);
console.log(C);
