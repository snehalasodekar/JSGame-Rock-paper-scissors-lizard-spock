(function() {
    var choiceArray = ['rock','paper','scissors','lizard','spock'];
    var playerScore = 0;
    var computerScore = 0;
    var computerChoice,playerChoice;
    var message = document.getElementById("messageDiv");
    var playerChoiceMsg = document.getElementById("playerSelection");
    var computerChoiceMsg = document.getElementById("computerSelection");
    var playerScoreMsg =document.getElementById("playerScore");
    var computerScoreMsg = document.getElementById("computerScore");

    var rounds = 5;
    var roundNumMsg = document.getElementById("roundNumMsg");
    var roundResult = document.getElementById("roundResult");
    var roundNum = "Round "+rounds;
    
    /*
    *   Display values to lables using function
    */
    var assignVal =(element,value)=>{

        element.innerText = value;
    }
assignVal(roundNumMsg,roundNum);
/**
 * reset button, reload page
 */
document.getElementById("reset").addEventListener("click",()=>{
    location.reload();
    
});
    document.querySelectorAll('.selectButton').forEach(btn => {
        btn.addEventListener("click",()=>{
            if(rounds > 0){
            // when player click on button computer also plays.
                rounds--;
                roundNum = "Round "+rounds;
                assignVal(roundNumMsg,roundNum);
            let randomNum = Math.floor(Math.random() * choiceArray.length);
                computerChoice = choiceArray[randomNum];
                playerChoice = btn.name;
                

            if(computerChoice == playerChoice){
                assignVal(message,"Tie Round");
                assignVal(playerScoreMsg,0);
                assignVal(computerScoreMsg,0);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            } else if(computerChoice == 'scissors' &&  playerChoice == 'paper'){
                assignVal(message,"Scissors cut Paper");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            }else if(computerChoice == 'paper' &&  playerChoice == 'rock'){
                assignVal(message,"Paper covers Rock");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
                
            } else if(computerChoice == 'rock' &&  playerChoice == 'lizard'){
                assignVal(message,"Rock crushes Lizard");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
                
            }else if(computerChoice == 'lizard' &&  playerChoice == 'spock'){
                assignVal(message,"Lizard poisons Spock");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
                
            }else if(computerChoice == 'spock' &&  playerChoice == 'scissors'){
                assignVal(message,"Spock smashes Scissors");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
                
            }else if(computerChoice == 'scissors' &&  playerChoice == 'lizard'){
                assignVal(message,"Scissors decapitate Lizard");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
                
            }else if(computerChoice == 'lizard' &&  playerChoice == 'paper'){
                assignVal(message,"Lizard eats Paper");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);

            }else if(computerChoice == 'paper' &&  playerChoice == 'spock'){
                assignVal(message,"Paper disproves Spock");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            }else if(computerChoice == 'spock' &&  playerChoice == 'rock'){
                assignVal(message,"Spock vaporizes Rock");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            }else if(computerChoice == 'rock' &&  playerChoice == 'scissors'){
                assignVal(message,"Rock crushes Scissors");
                playerScore += 0;
                computerScore += 1;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            } else{
                playerScore += 1;
                computerScore += 0;
                assignVal(playerScoreMsg,playerScore);
                assignVal(computerScoreMsg,computerScore);
                assignVal(playerChoiceMsg,playerChoice);
                assignVal(computerChoiceMsg,computerChoice);
            }
            assignVal(playerScoreMsg,playerScore);
            assignVal(computerScoreMsg,computerScore);
            
        }else{
            if(playerScore > computerScore){
                assignVal(roundResult,"Player is winner of this round");
            }else if(computerScore > playerScore){
                assignVal(roundResult,"Computer is winner of this round");
            } else if(playerScore == computerScore){
                assignVal(roundResult,"This is tie .. no one is winner");
            } else{
                assignVal(roundResult,"This is No winner .. Please try again");
            }
            assignVal(message,"Round One ends, replay");
        }/**/
        });
    }); //end of foreach
  
    
})();