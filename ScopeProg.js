//program for scope

var K = 1;
let L = 2;
const D = 3;

console.log(`globel: ${K}`);
console.log(`globel: ${L}`);
console.log(`globel: ${D}`);

function myfunc() {
    const D = 5;
    console.log(`function: ${K}`);
    console.log(`function: ${L}`);
    console.log(`function: ${D}`);

    if(true) {
        let L = 4;
        console.log(`block: ${K}`);
        console.log(`block: ${L}`);
        console.log(`block: ${D}`);
    }
}
myfunc();
console.log(y);