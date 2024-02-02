
class Game {
    constructor() {
        this.playerText = document.getElementById("playerText")
        this.computerText = document.querySelector("#computerText")
        this.resultText = document.querySelector("#resultText")
        this.choiceBtns = document.querySelectorAll(".choiceBtn")
        this.player = null ; 
        this.computer = null ; 
        this.result = null ; 

        this.choiceBtns.forEach(button => button.addEventListener("click", ()=> {
            this.player = button.textContent ; 
            this.computerTurn() ; 
            this.playerText.textContent = `Player: ${this.player}` ;
            this.computerText.textContent = `Computer: ${this.computer}` ;
            this.resultText.textContent = this.checkWinner() ;    
        })) ;  
}


    computerTurn() {

        const randNum = Math.floor(Math.random() * 3) + 1 ; 
        switch(randNum) {
            case 1: 
                this.computer = "ROCK" ;
            break ; 
            case 2:
                this.computer = "PAPER" ; 
                break ; 
            case 3:
                this.computer = "SCISSORS" ; 
                break ; 
    }
}

    checkWinner() {
   

    if (this.player == this.computer) {
        return "Draw" ;
    }  else if (this.computer == "ROCK") {
        return (this.player == "PAPER") ? "You Lose!" : "You Win!"
    } else if (this.computer == "PAPER") {
        return (this.player == "SCISSORS") ? "You Win!" : "You Lose!"
    } else if (this.computer == "SCISSORS") {
        return (this.player == "ROCK") ? "You Win!" : "You Lose!" 
    }
   }
}

const game = new Game() ; 
