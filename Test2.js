const p = "rock";
const c = "scissors";

const v = 
p===c?"Tie!"
:p==="rock" && c==="paper"
?"computer wins"
:p==="paper" && c==="scissors"
?"computer wins"
:p==="scissors" && c=="rock"
?"compuer wins"
:"player wins";

console.log(v);