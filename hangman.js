const Hangman= function(word, remainingGuesses){
    this.words=word.toLowerCase().split(''),
    this.remainingGuesses=remainingGuesses,
    this.guessedLetter=[]
    this.status='playing'

    }

Hangman.prototype.gameStatus=function(){
     let isAllMatched=this.words.every((letter)=>{
         return this.guessedLetter.includes(letter)
     })
     

    if(this.remainingGuesses===0){
        this.status='failed'
    }else if(isAllMatched){
        this.status='Fiishesd'
    }else{
        this.status='playing'
    }

}

    Hangman.prototype.Makingguess=function(guess){
       
        //check where the guess word is unique or not
        const isUnique= !this.guessedLetter.includes(guess)
        const isBadWord=!this.words.includes(guess)
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
    
  

            

    //console.log(newGame.remainingGuesses)
   

    