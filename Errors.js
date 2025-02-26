// Errors and Error Handling

"use strict"; //its through the Errors on the referance

const Errors = () => {
    try{
        const name = "kavin";
        name = "rohith";
    }catch(er){
        console.error(er.stack);
    }
};

Errors();