// Errors and Error Handling

"use strict"; //its through the Errors on the referance

const Errors = () => {
    try{
        throw new Error("this is a custom Error")
    }catch(er){
        console.error(er.message);
    }finally{
        console.log("finally...");
    }
};

Errors();