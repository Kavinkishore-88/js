// Errors and Error Handling

"use strict"; //its through the Errors on the referance

const Errors = () => {
    try{
        throw new customError("this is a custom Error")
    }catch(er){
        console.error(er.stack);
    }
};

Errors();

function customError(message){
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name} : ${this.message}`;
}

//alerternate pre define
const nErrors = () => {
    try{
        throw new Error("this is a custom Error")//Error is keyword
    }catch(er){
        console.error(er);
    }
};

nErrors();