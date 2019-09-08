class Hangman{

    constructor(word, remainingGuesses,guessedLetter,status){
        this.words=word.toLowerCase().split(''),
        this.remainingGuesses=remainingGuesses,
        this.guessedLetter=[]
        this.status='playing'
    }

    gameStatus(){
        let isAllMatched=this.words.every(letter=> this.guessedLetter.includes(letter))

        if(this.remainingGuesses===0){
            this.status='failed'
        }else if(isAllMatched){
            this.status='finished'
        }else{
            this.status='playing'
        }
        
    }

    createStatus(){
        if(this.status==='playing'){
            return `Guesses left:${this.remainingGuesses}`
        }else if(this.status==='failed'){
         return `Nice try! you word is ${this.words.join('')} `
        }else{
            return `Great Work`
        }
     }
    
     MakingGuess(guess){
        const isUnique= !this.guessedLetter.includes(guess)
        const isBadWord=!this.words.includes(guess)

        if(this.remainingGuesses<=0){
            return
        }
        if(isUnique){
            this.guessedLetter.push(guess)
        }
       
        if(isUnique && isBadWord){
            this.remainingGuesses--
        }
        this.gameStatus()
        }

    getPuzzle(){
        let puzzle=''
        this.words.forEach((letter)=>{
            if(this.guessedLetter.includes(letter)){
                puzzle+=letter
            }else{
                puzzle+='*'
            }
        })
        return puzzle
        }
}
   
   
    