let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userPara = document.querySelector("#user-score");
let compPara = document.querySelector("#comp-score")
const drawGame=()=>{
    msg.innerText="game was draw play again";
    msg.style.backgroundColor=" #2e4057"
}
let showWinner =(userWIn,userChoice,comChoice)=>{
    if(userWIn){
        userScore++
       userPara.innerText=userScore
        msg.innerText=`you win the game your ${userChoice} beats  ${comChoice}`;
        msg.style.backgroundColor="green";
 
    }else{
        compScore++
        compPara.innerText= compScore
        msg.innerText=` you lose the game ${comChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor="red";

     
 
    }
}

const genComChoice= ()=>{                  // modular
    let options= ["rock","pepar","scissors"]
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
} 
const playGame=(userChoice)=>{
//generate computer choice 
let comChoice= genComChoice();
// console.log("user choice =" ,userChoice);
// console.log("com choice",comChoice);
if(userChoice === comChoice){
    drawGame()
}else{
    let userWIn = true;
    if(userChoice ==="rock"){
        // scissors , pepar
       userWIn=comChoice ==="pepar" ? false : true;
    }else if(userChoice ==="pepar"){
        userWIn =comChoice ==="scissors"?false :true;
    }else{
        // rock , pepar
       userWIn= comChoice ==="rock"?false : true;
    }
    showWinner(userWIn,userChoice,comChoice)
}


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     let userChoice = choice.getAttribute("id")
        // console.log(`choice was clicked ${userChoice}`)
        playGame(userChoice)

    })
})