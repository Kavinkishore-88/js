const student = {
    Name : "Kavin",
    Course : "CSE",
    Year : 2025,
    Age : 20
};
//destructuring the obj

const {Course: myClass,Year: cYear} = student;
console.log(myClass,cYear);
const {Name,Course,Year,Age}= student;
console.log(Name,Course,Year,Age);

const cls = ({Course}) =>{return Course;}
console.log(cls(student));
