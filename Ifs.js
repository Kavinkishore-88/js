//If Statemnets

let v ="Kavin";
let r; 

if(v){
    r = `${v} Dark`;//for formate string
}

console.log(r);

let score = 88;
let grade;

if (score>=90) {
    grade = 'A'
}else if (score>=80) {
    grade = 'B'
}else if (score>=70) {
    grade = 'C'
}else{
    grade = 'F'
}
console.log(grade);