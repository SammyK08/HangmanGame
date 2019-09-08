const Hangman= function(word, remainingGuesses){
    this.words=word.toLowerCase().split(''),
    this.remainingGuesses=remainingGuesses,
    this.guessedLetter=[]
    this.status='playing'
    }

Hangman.prototype.gameStatus=function(){

    //returns true if words contain every letter present in guessedLetter
    let isAllMatched=this.words.every(letter=> this.guessedLetter.includes(letter))

    if(this.remainingGuesses===0){
        this.status='failed'
    }else if(isAllMatched){
        this.status='finished'
    }else{
        this.status='playing'
    }
}

Hangman.prototype.createStatus=function(){
   if(this.status==='playing'){
       return `Guesses left:${this.remainingGuesses}`
   }else if(this.status==='failed'){
    return `Nice try! you word is ${this.words.join('')} `
   }else{
       return `Great Work`
   }
}

Hangman.prototype.MakingGuess=function(guess){
      
        const isUnique= !this.guessedLetter.includes(guess)
        const isBadWord=!this.words.includes(guess)

        // if(this.status!=='Playing'){
        //     return
        // }

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

    
       Hangman.prototype.getPuzzle=function(){
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
    
  

    