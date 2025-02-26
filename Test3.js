// game creating

let p;
let c = Math.floor(Math.random()*3)+1;

switch(c){
    case 1:c = "rock";break;
    case 2:c = "paper";break;
    case 3:c = "scissors";break;
}

const v = confirm("Lets play game");

if (v){
    p= prompt("lets play.");
    if(p){
        Game = p===c?"Tie!"
        :p==="rock" && c==="paper"
        ?"computer wins"
        :p==="paper" && c==="scissors"
        ?"computer wins"
        :p==="scissors" && c=="rock"
        ?"compuer wins"
        :"player wins";

        console.log(alert(`Player : ${p} \nComputer : ${c}\n${Game}`));
        again = confirm("lets play again.");
        if (again){
            location.reload();
        }else{
            alert("Thank for Playing"); 
        }
    }else{
        alert("As your Wish.");
    }
}else{
    alert("Maybe Next Time.");
}
