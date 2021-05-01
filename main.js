
// The variable const is used here to make sure that 'game' cannot be changed
// Fat arrows have been used throughout this JS to shorten the function
// The two let variables assign the scores of player and computer to start off at zero
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    
    //This JS selects the buttons rock, paper, scissor
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
  
      
    
      //This JS gives the computer options to choose from
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //This creates the randomness of the three choices 
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
            //This JS allows the comparing of both players 
            compareHands(this.textContent, computerChoice);
        });
      });
    };
     // This code allows the score to be updated and stored
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
     // This JS checks for a tie
    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector(".winner");
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //This JS checks for rock vs scissors and updates each score
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for paper vs scissors and updates each score
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for scissors vs rock and updates the score
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    
    playMatch();
  };
  
  //
  game();