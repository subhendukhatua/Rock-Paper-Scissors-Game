let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");



const genCompChoice=()=>{
    const options = ["rock","paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText=("Game was Draw. Play again.");
    msg.style.backgroundColor = "antiquewhite";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText=(`You Win! your ${userChoice} beat ${compChoice}`);
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log("Computer Win!");
        msg.innerText=(`Computer Win! ${compChoice} beat your ${userChoice}`); 
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
    
}

const playGame=(userChoice)=>{
    console.log("User choice = " ,userChoice );
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);


    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})
