// User Define Functions

function sum(n1,n2){
    if(n1 === undefined && n2 === undefined){
        return 'value not enter.';
    }else if (n1 === undefined){
        return n2;
    }else if(n2 === undefined){
        return n1;
    }
    return n1+n2;
}

console.log(sum());
                 
//email Slicing

let Email = "kavindark75@gmail.com"

function getUserNameFromEmail(Email){
    console.log(Email.slice(0,Email.indexOf("@")));
}

getUserNameFromEmail(Email);

//function for propercase

function toProperCase(word){
    w = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return w;
}

console.log(toProperCase("kavin"));

//Other ways to decler the function

const print = function (ways){
    console.log(ways);
}

const hint = (path) =>{
    console.log(path);
}

print("kavin");
hint("kishore");