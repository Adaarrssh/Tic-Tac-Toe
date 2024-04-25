let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn1");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");
// let msgContainer2 = document.querySelector(".msg1");
// let msg2 = document.querySelector("#msg1");
let click_count = 0;
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    checkTie();
  });
});
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
      }
    }
  }
};
// const showTie = (tie) => {
//   msg.innerText = `TIE`;
//   msgContainer2.classList.remove("hide");
//   disableBoxes();
// };
// const checkTie = () => {
//   for (let pattern of winPatterns) {
//     let pos1val = boxes[pattern[0]].innerText;
//     let pos2val = boxes[pattern[1]].innerText;
//     let pos3val = boxes[pattern[2]].innerText;
//     if (pos1val === "" && pos2val === "" && pos3val === "") {
//       if (pos1val != pos2val && pos2val != pos3val) {
//         console.log("tie", pos1val);
//         showTie(pos1val);
//       }
//     }
//   }
// };
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
