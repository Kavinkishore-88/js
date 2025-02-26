let B = confirm("ok");
console.log(B);

let C = alert("ok");
console.log(C);

let e = prompt("ok");
if (e){//for empty ok
    console.log(e ?? "not ok");//nullcolscing for cancel
}else{
    console.log("not ok")
}  