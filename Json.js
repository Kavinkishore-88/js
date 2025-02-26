//JSON JavaScript Object Notaion
//Text format

//Object
const myObj = {
    name : "kavin",
    domains : ["ml","fullstack","softwaredeveloping"],
    my : function(){
        console.log(`I am ${this.name}`);
    }
}

console.log(myObj);
myObj.my();

                    //<--convert obj into Json-->

const cJson = JSON.stringify(myObj);
//JSON.stringify() - "JSON" is libarery "stringify()" is inbuild function
console.log(cJson);
console.log(typeof cJson);
//in json file ,function is not converted into text format


                    //<--convert Json into obj-->

const rJson = JSON.parse(cJson);
//"parse()" is the inbuild function for covert json into obj
console.log(rJson);
console.log(typeof rJson);