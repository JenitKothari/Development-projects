let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new_game = document.querySelector("#new_game");
let winner = document.querySelector(".winner");
let i=0;

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let turnO = true;
winner.disabled = true;

const disableAll = ()=>
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

const clearAll = ()=>
{
    // i=0;
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
        winner.disabled = true;
        winner.innerText="";
    })
}

const checkWinner = ()=>
{
    for(let pattern of winPattern)
    {
        
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                winner.disabled = false;
                winner.innerText = `winner : ${val1}`;

                disableAll();
            }
        }

    }
    // i++;
    // if(i===9)
    //     {
    //         winner.disabled=false;
    //         winner.innertext = "Draw";
    //     }
}

boxes.forEach( (box) => {
    box.addEventListener("click", ()=>{
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        
    }) 
   
});

reset.addEventListener("click",clearAll);
new_game.addEventListener("click",clearAll);