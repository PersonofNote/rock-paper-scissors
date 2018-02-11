//The version with lots of "if" statements. Clean this up later, eh?
//When all you've got is an 'if' statement, everything looks like a conditional! Or something.


var playerHaschosen = false; //This is supposed to help keep track of the rounds, but I think I don't need it.
var playerSelection;
var computerSelection;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

document.getElementById("playAgain").style.display = "none";
//document.querySelector("#displayScore").innerHTML = ("Player score: " + playerScore + ", Computer score: " + computerScore);

function reply_click(clicked_id)
			{
                playerSelection = clicked_id;
                playGame();

            }





function computerPlay()
  {
   var choice = ["scissors","rock", "paper"];
   var computerSelection = choice[Math.floor(Math.random() * choice.length)];
   return computerSelection;
   console.log("Computer chose: " + computerSelection);
  }


function playRound(playerSelection, computerSelection) {
	var rock, paper, scissors, playerWin, playerLose, playerTie, winner;
	rock = "rock";
	paper = "paper";
	scissors = "scissors";
	roundsPlayed ++;
	//var output = function compareSelections() {
	if (playerSelection == "rock")
	  {
	    if (computerSelection == "rock")
	      {
	        return "playerTie";
	        //console.log("tie");
	      }
	    if (computerSelection == "paper")
	      {
	        return "playerLose";
	        //console.log("playerLose")
	      }
	    if (computerSelection == "scissors")
	      {
	        return "playerWin";
	       // console.log("playerWin")
	      }
	  }
	 else if (playerSelection == "paper")
	 {
	   	    if (computerSelection == "rock")
	      {
	        return "playerWin";
	        //console.log("playerWin");
	      }
	    if (computerSelection == "paper")
	      {
	        return "playerTie";
	        //console.log("tie");
	      }
	    if (computerSelection == "scissors")
	      {
	        return "playerLose";
	        //console.log("playerLose");
	      }
	 }
	 else if (playerSelection == "scissors")
	 {
	   	    if (computerSelection == "rock")
	      {
	        return "playerLose";
	      }
	    if (computerSelection == "paper")
	      {
	        return "playerWin";
	      }
	    if (computerSelection == "scissors")
	      {
	        return "playerTie";
	      }
	 }
	 else 
	 {
	   console.log( "Something went wrong... I don't even know how you got this message. Good job?")
	 }
	//}
	//return output;
	//console.log("Round Output = " + output);
}




/*function playerChoose()
	{
		var choice = prompt("Choose your weapon!");

		if (choice.toLowerCase() != "paper") 
			{
			alert("Hey, no cheating.");
			playerChoose();
		}
		else
		{
  			alert("Good choice");
  			return choice;
		}
	}
	*/


function game() {
  if (roundsPlayed < 5)
    {
      var outcome = playRound(playerSelection, computerSelection);
      var tally = document.createElement('div');
      tally.className="tallyMark";
      if (outcome == "playerWin")
        {
          playerScore += 1;
          var winner = "You win round " + roundsPlayed; 
           console.log("Player score + 1")
           console.log("Rounds played = " + roundsPlayed);
          console.log("playerScore =" + playerScore);
           console.log("computerScore = " + computerScore);
           document.getElementById("playerScoreDisplay").appendChild(tally);
           
        }
      else if (outcome == "playerLose")
      {
        computerScore +=1;
        winner = "Computer wins round " + roundsPlayed;
        console.log("Computer score + 1")
       console.log("playerScore = " + playerScore);
       console.log("computerScore = " + computerScore);
       console.log("Rounds played = " + roundsPlayed);
       document.getElementById("computerScoreDisplay").appendChild(tally);
      }
      else
      {
       winner = "Round " + roundsPlayed + "is a tie; everyone loses."
       console.log("Tie, no score increases.")
       console.log("playerScore = " + playerScore);
       console.log("computerScore = " + computerScore);
       console.log("Rounds played = " + roundsPlayed);
      }
      
       //playerHaschosen = false;
       document.querySelector("#logMoves").innerHTML = ("Player chose: " + playerSelection + "Computer chose: " + computerSelection + " " + winner);
       //document.querySelector("#displayScore").innerHTML = ("Player score: " + playerScore + ", Computer score: " + computerScore);
       console.log("Player selection for round " + roundsPlayed + ": " + playerSelection);
       console.log("Computer chose: " + computerSelection);
    }
   
   if (roundsPlayed >= 5)
    {
      if (playerScore > computerScore)
      {
      	var finalScore = "Player wins!";
        console.log("Player wins!")
      }
      else if (playerScore < computerScore)
      {
      	var finalScore = "Computer Wins!"
        console.log("Computer wins!")
      }
      else 
      {
        console.log("Tie overall.")
        var finalScore = "It's a draw!"
      }
      document.getElementById("playAgain").style.display = "block";
      document.querySelector("#displayScore").innerHTML = "FINAL RESULT: " + finalScore;
    }
}

function playGame() {
	computerSelection = computerPlay();
	//playRound(playerChoice,computerSelection);
	game();
}

function resetGame() {
	roundsPlayed = 0;
	computerScore = 0;
	playerScore = 0;
	document.querySelector("#logMoves").innerHTML ="";
	//document.querySelector("#displayScore").innerHTML = ("Player score: " + playerScore + ", Computer score: " + computerScore);
	document.querySelector("#displayScore").innerHTML = " ";
	document.getElementById("playAgain").style.display = "none";
	 document.getElementById("playerScoreDisplay").innerHTML = " ";
	  document.getElementById("computerScoreDisplay").innerHTML = " ";
}



//const playerSelection = prompt("Rock, paper, scissors?");
//console.log(playerSelection);
//computerSelection = computerPlay();
//console.log(computerSelection);

//document.getElementsByClassName("choice")[0].addEventListener("click", playGame);
//document.addEventListener("click", playGame());




//console.log(playRound(playerSelection, computerSelection));




/*function playRound(playerSelection, computerSelection) {
	var rock, paper, scissors
	rock = "rock"
	paper = "paper"
	scissors = "scissors"
	rock > scissors
	scissors > paper
	paper > rock
	if (playerSelection > computerSelection)
	  console.log("Player wins!")
	 else 
	 console.log ("Computer wins!")
}

function computerPlay()
  {
   let choice = ["rock", "paper", "scissors"];
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];
   return computerChoice
  }

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))



Get element by class (button class),
Then get element by id, and set the playerinput appropriately,
then call game.
*/