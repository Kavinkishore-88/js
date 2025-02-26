//String Methods
//basics

let Name = 'Kavin';

console.log(Name);
console.log(Name.length,"kisore".length);//length and no need pranthesis
console.log(Name.charAt(0));//index based
console.log(Name.indexOf("a"));//find the index of char

const fName = 'KavinKishore';

console.log(fName.lastIndexOf("K"));//find the index from end
console.log(fName.slice(5));//slice
console.log(fName.slice( 5 /*staring index*/, 8 /*range*/));
console.log(fName.toUpperCase());
console.log(fName.toLowerCase());
console.log(fName.includes("Kavin"));
console.log(fName.split("K"));
