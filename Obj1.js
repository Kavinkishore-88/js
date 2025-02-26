//Objects
//key-value pairs in curly braces

const myObj = {name:"kavin"};

const aObj = {
    student: true,
    roll: 88,
    language:{
        motherTounge:"Tamil",
        otherTang:"English"
    },
    sub : ["AI","ML"],
    func : function (){
        return `hello ${this.roll}`;
    }
};
console.log(myObj.name);
console.log(aObj.student);
console.log(aObj.roll);
console.log(aObj.language);
console.log(aObj.language.motherTounge);
console.log(aObj.sub);
console.log(aObj.sub[0]);
console.log(aObj.func());


//another way to call the object 
console.log(aObj["student"]);//only key reprent in the duble quots