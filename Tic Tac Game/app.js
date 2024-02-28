
// selecting btns of game and reset
let btns = document.querySelectorAll(".btns");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let result = document.querySelector("#result");


let turn0 = true;

// store wining patterns in an array
winningPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (turn0) { // for playerO
            btn.innerText = "O";
            turn0 = false
        }
        else {  // for playerX
            btn.innerText = "X";
            turn0 = true;
        }

        btn.disabled = true;
        gameWinner();
    })
})


// function to check winner
const gameWinner = () => {

    for (pattern of winningPatterns) {

        let pos1Value = btns[pattern[0]].innerText;
        let pos2Value = btns[pattern[1]].innerText;
        let pos3Value = btns[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                
                result.style.display = "block";
                newBtn.style.display = "block";
                resetBtn.style.display = "none";
                result.innerText = "Congratulation " + pos1Value + " is Winner";
                disabledBtns();
            }

        }
    }
}

// function for disabled btns after win the Game
const disabledBtns = () =>{
    for (let box of btns){
        box.disabled = true;
    }
}

// function for enabled btns after win the Game
const enabledBtns = () =>{
    for (let box of btns){
        box.disabled = false;
        box.innerText = "";
    }
}

// reset game function
const resetGame = () => {
    turn0 = true; 
    enabledBtns();
    result.style.display = "none";
    newBtn.style.display = "none";
    resetBtn.style.display = "inline";
}

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);