const puzzleEL=document.querySelector('#puzzle')
const guessesEL=document.querySelector('#guesses')  
const newGame=new Hangman('cat',2)
console.log(newGame.status)
   
window.addEventListener('keypress', (e)=>{
    const guess=String.fromCharCode(e.charCode)
    newGame.Makingguess(guess)
    puzzleEL.textContent=newGame.getPuzzle()
    guessesEL.textContent=newGame.remainingGuesses
    console.log(newGame.status)
   })

   
