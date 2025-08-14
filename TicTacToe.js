let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector("main");


console.log(boxes);
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
};

const newGame = () => {
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
}

const enableButtons = () => {
    for(const box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

for(const box of boxes){
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
}

const showWinner = (winner) => {
    if(winner == "X"){
        msg.innerText = "Congratulations, winner is player X";
    }
    else {
        msg.innerText = "Congratulations, winner is player O";
    }
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for (const pattern of winPatterns){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if(a !== "" && b!== "" && c!== ""){
            if(a==b && b==c){
                console.log("Winner is ",a);
                showWinner(a);
                for(box of boxes){
                    box.disabled = true;
                }
                break;
            }
        }
    }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);