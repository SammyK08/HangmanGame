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

   getPuzzle((error,puzzle)=>{
       if(error){
        console.log(`Error:${error}`)
       }else{
        console.log(puzzle)
       }
   })

   getCountry('US',(error,country)=>{
  error?console.log(error):console.log(`Country name:${country.name}`)
})