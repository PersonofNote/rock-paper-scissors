//The version with lots of "if" statements. Clean this up later, eh?
//When all you've got is an 'if' statement, everything looks like a conditional! Or something.



function computerPlay()
  {
   let choice = ["scissors","rock", "paper"];
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];
   return computerChoice
  }


function playRound(playerSelection, computerSelection) {
	var rock, paper, scissors
	rock = "rock"
	paper = "paper"
	scissors = "scissors"
	if (playerSelection == "rock")
	  {
	    if (computerSelection == "rock")
	      {
	        return "tie"
	      }
	    if (computerSelection == "paper")
	      {
	        return "playerLose"
	      }
	    if (computerSelection == "scissors")
	      {
	        return "playerWin"
	      }
	  }
	 else if (playerSelection == "paper")
	 {
	   	    if (computerSelection == "rock")
	      {
	        return "playerWin"
	      }
	    if (computerSelection == "paper")
	      {
	        return "tie"
	      }
	    if (computerSelection == "scissors")
	      {
	        return "playerLose"
	      }
	 }
	 else if (playerSelection == "scissors")
	 {
	   	    if (computerSelection == "rock")
	      {
	        return "playerLose"
	      }
	    if (computerSelection == "paper")
	      {
	        return "playerWin"
	      }
	    if (computerSelection == "scissors")
	      {
	        return "tie"
	      }
	 }
	 
	 else
	 {
	   return "That's against the rules!"
	 }

}

function playerChoose()
	{
		var choice = prompt("Choose your weapon!");

		if (choice.toLowerCase != "rock" && choice.toLowerCase != "paper" && choice.toLowerCase != "scissors")
			{
			alert("Hey, no cheating.");
			playerChoose();
		}
		else
		{
  			alert("Good choice");
  			var playerChoice = choice;
		}
	}



const playerSelection = playerChoose()
const computerSelection = computerPlay()
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))




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
*/