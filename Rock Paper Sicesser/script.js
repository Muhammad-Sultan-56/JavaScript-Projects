
let userScore = 0;
let computerScor = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userPoints = document.getElementById("user");
let compPoints = document.getElementById("computer");


// Generate Computer Choice function

const genCompChoice = () => {

    let options = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return options[idx];
}

// function to show winner
const showWinner = (userWin , userChoice , computerChoice) => {
    if (userWin) {
        userScore++;
        userPoints.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.innerText = `You Win ${userChoice} beats ${computerChoice}`;

    }
    else {
        computerScor++;
        compPoints.innerText = computerScor
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lost ${computerChoice} beats ${userChoice}`;

    }
}


// Playgame function
const playGame = (userChoice) => {

    console.log("User Choice is ", userChoice);

    let computerChoice = genCompChoice();
    console.log("Computer Choice is ", computerChoice);


    if (userChoice === computerChoice) {
        msg.style.backgroundColor = "gray";
        msg.innerText = "Game is Draw";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // condition on chosing rock
            userWin = computerChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            // condition on chosing paper
            userWin = computerChoice === "scissor" ? false : true
        }
        else {
            // condition on chosing scissor
            userWin = computerChoice === "rock" ? false : true
        }

        showWinner(userWin , userChoice , computerChoice);
    }

}



choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice)

    })
})