let user_score = 0;
let comp_score = 0;
let user_choice,comp_choice;
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user_score");
let compScore = document.querySelector("#comp_score");
let result_para = document.querySelector(".result");

const generateCompChoice = () =>
{
    const choices = ["rock","paper","sissor"];
    return choices[Math.floor(Math.random()*3)];
}

const showDraw = () =>
{
    result_para.innerText = "DRAW";
}

const showResult = (user_wins) =>
{
    if(user_wins)
    {
        user_score++;
        userScore.innerText = user_score;
        result_para.innerText = "YOU WIN";
    }
    else{
        comp_score++;
        compScore.innerText = comp_score;
        result_para.innerText = "YOU LOOSE";
    }
}

const decideWinner = () =>
{
    if(user_choice === comp_choice)
    {
        showDraw();
    }
    else
    {   
        let user_wins = false;
        if(user_choice==="stone")
        {
            user_wins = comp_choice==="sissor" ? true : false;
        }
        else if(user_choice==="paper")
        {
            user_wins = comp_choice==="stone" ? true : false;
        }
        else
        {
            user_wins = comp_choice==="paper" ? true : false;
        }

        showResult(user_wins);
    }
}

choices.forEach( (choice) =>
{
    choice.addEventListener("click", ()=>
    {
        user_choice = choice.getAttribute("id");
        comp_choice = generateCompChoice();
        decideWinner();
    }
    )
}
)