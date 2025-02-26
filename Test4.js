// game creating

let p;
let c = Math.floor(Math.random()*3);
const ArrayA = ["rock","paper","scissors"];
const l = ArrayA[c];
const v = confirm("Lets play game");

if (v){
    p = prompt("lets play.");
    p = p.toLowerCase();
    if(p === "rock"||p === "paper"||p === "scissors"){
        Game = p === l ? "Tie!"
        : p === "rock" && l === "paper"
        ? "computer wins"
        : p === "paper" && l === "scissors"
        ? "computer wins"
        : p === "scissors" && l === "rock"
        ? "compuer wins"
        : "player wins" ;

        console.log(alert(`Player : ${p} \nComputer : ${l}\n${Game}`));
        again = confirm("lets play again.");
        if (again){ 
            location.reload();
        }else{
            alert("Thank for Playing"); 
        }
    }else if(v){
        alert("Enter correctly.");
        location.reload();
    }else{
        alert("As your Wish.");
    }
}else{
    alert("Maybe Next Time.");
}
