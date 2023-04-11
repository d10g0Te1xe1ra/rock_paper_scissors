const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
        return userInput 
    } else {
        console.log('input errado')
    }
}
const getComputerChoice = () => {
    const input = Math.floor(Math.random()* 3)
    if(input === 0) return 'paper' 
    else if(input === 1) return 'rock'
    else return 'scissors'
}
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) return 'tie';
    if(userChoice === 'rock'){
      if(computerChoice === 'paper') return 'winner: computer'
      else return 'winner:user'
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors')
        return 'winner: computer'
        else return 'winner: user'
    }
}


function playGame (){
   const userChoice = getUserChoice('paper')
   console.log(userChoice)
   const computerChoice = getComputerChoice()
   console.log(computerChoice)
   console.log(determineWinner(userChoice, computerChoice))
}

playGame()