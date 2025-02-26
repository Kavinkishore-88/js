const student = {
    Name : "Kavin",
    Course : "CSE",
    Year : 2025,
    Age : 20
};

console.log(Object.keys(student));
console.log(Object.values(student));

for( let info in student){
    console.log(student[info]);//Its print values
}

for( let info in student){
    console.log(info);//Its print keys
}

for( let info in student){
    console.log(`${info}, it's ${student[info]}`);
}