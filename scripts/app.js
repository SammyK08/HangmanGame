const puzzleEL=document.querySelector('#puzzle')
const guessesEL=document.querySelector('#guesses')  
let game1




// puzzleEL.textContent=newGame.getPuzzle()
// guessesEL.textContent=newGame.createStatus()

window.addEventListener('keypress', (e)=>{

    const guess=String.fromCharCode(e.charCode)
    game1.MakingGuess(guess)    

    render()


    
   })

   const render=()=>{
    puzzleEL.innerHTML=''
     guessesEL.textContent=game1.createStatus()

    game1.getPuzzle().split('').forEach((letter)=>{
        const letterEl=document.createElement('span')
        letterEl.textContent=letter 
        puzzleEL.appendChild(letterEl)
    })
    
   }

   const startGame=async()=>{
       const puzzle=await getPuzzle('2')
       game1=new Hangman(puzzle,5)
       render()
   }

   document.querySelector('#reset').addEventListener('click', startGame)

   startGame()

//    getPuzzle('2').then((puzzle)=>{
//        console.log(puzzle)
//    },
//    (err)=>{
//        console.log(`Error:${err}`)
//    })


//    getCountry('MX').then((country)=>{
//        console.log(country.name)
//    }).catch((err)=>{
//        console.log(`Error:${err}`)
//    })

//    getLocation().then((location)=>{
//        return getCountry(location.country)
//    }).then((country)=>{
//        console.log(country.name)
//    }).catch((err)=>{
//        console.log(`Error:${err}`)
//    })

//    getEmployeeInfo().then((employee)=>{
//        employee.forEach(emp=>{
//         console.log(`${emp.FirstName} ${emp.LastName} is ${emp.Gender}`)
//        })
//    }).catch((err)=>{
//        console.log(`Error:${err}`)
//    })

   
//    getCurrentCountry().then((country)=>{
//        console.log(country.name)
//    }).catch((error)=>{
//        console.log(error)
//    })