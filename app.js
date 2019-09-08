const puzzleEL=document.querySelector('#puzzle')
const guessesEL=document.querySelector('#guesses')  
const newGame=new Hangman('cat',2)


console.log(newGame.status)

puzzleEL.textContent=newGame.getPuzzle()
guessesEL.textContent=newGame.createStatus()

window.addEventListener('keypress', (e)=>{

    const guess=String.fromCharCode(e.charCode)

    newGame.MakingGuess(guess)    

    puzzleEL.textContent=newGame.getPuzzle()
    guessesEL.textContent=newGame.createStatus()

    console.log(newGame.status)
   })

   
