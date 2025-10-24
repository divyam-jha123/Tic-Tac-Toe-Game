let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winnerBox = document.querySelector(".winner-box");
let winner = document.querySelector(".winner");
let newgamebtn = document.querySelector(".new-game-btn");
let num = true;
let count = 0;

//winnning patterns;
const winningArr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  
];

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (num) {
      box.innerText = "O";
      num = false;
    } else {
      box.innerText = "X";
      num = true;
    }
    box.disabled = true;
    count++;

      let isWinner = checkWinner();
      if (count === 9 && !isWinner) {
          gameDraw(); // when no one is the winner
      }
  }); 
});

//gamedraw condition.
let gameDraw = () => {
    winner.innerText = `Game was a Draw.`;
    winnerBox.classList.remove("hide");
    winner.style.color = "#ffffc7";
    disabledbtn();
}


const disabledbtn = () => {
    for (let b of box) {
        b.disabled = true;
    }
}; 

const enabledbtn = () => {
    for (let b of box) {
        b.disabled = false;
        b.innerText = "";
    }
};

//reset btn
const resetgame = () => {
    let num = true;
    enabledbtn();
    winnerBox.classList.add("hide");
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);


//Winner checking and showing;
const showWinner = (player) => {
    winner.innerText = `Congratulations, Winner is ${player} 🎉`;
    winner.style.color = "#ffffc7";
    winnerBox.classList.remove("hide");
    disabledbtn();
};


const checkWinner = () => {
  for (let arr of winningArr) {
    let val1 = box[arr[0]].innerText;
    let val2 = box[arr[1]].innerText;
    let val3 = box[arr[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};
