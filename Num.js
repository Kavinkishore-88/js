//numbers
const vari = 10;
const va ="10";
const d= 10.09;
const varid = "10.010aa"

//number functions
console.log(parseFloat(varid));//only float
console.log(Number.parseFloat(varid).toFixed(2));//limit the float value but return string
console.log(parseInt(d));//only int
console.log(vari.toString());//conver into string
console.log(Number.isInteger(vari));//check is integer
console.log(parseFloat(varid).toFixed(3).toString())//eg: chaining

//isNaN
console.log(Number.isNaN(varid));//number isNaN
console.log(isNaN(varid));//Global isNaN