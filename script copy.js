let button=document.querySelectorAll(".game button");
let reset=document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");

let turn0=true//turnX,turn0;
let count=0;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
  turn0= true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
button.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0){
        button.innerText="0";
        turn0=false;
        }
        else{
            button.innerText="X";
            turn0=true;

            

        }
        button.disabled=true;
        
        count++;

         let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    };
});
});
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const gameDraw = () => {
  msg.innerText = "Game Draw!";
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const enableBoxes = () => {
    button.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
};
const disableBoxes = () => {
    button.forEach((btn) => {
        btn.disabled = true;
    });
};

const checkWinner=()=>{
    for( let pattern of winpattern){
          let val1=  button [pattern[0]].innerText;
          let val2=   button [pattern[1]].innerText;
           let val3=  button [pattern[2]].innerText;
           if(val1 !=""&& val2 !=""&& val3 !=""){
            if(val1===val2 && val2===val3){
                showWinner(val1);
                return true;

            }
            
           }



    }


};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




