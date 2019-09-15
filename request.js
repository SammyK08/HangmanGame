

const getPuzzle= async(wordCount)=>{
    let response= await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(response.status===200){
            const data=await response.json()
            return data.puzzle
        }else{
            throw new Error('unable to fetch puzzle')
        }
    }

  

const getCountry=async (countryCode)=>{
    let response= await fetch(`http://restcountries.eu/rest/v2/all`)
        if(response.status===200){
            const data=await response.json()
            return data.find(c=>c.alpha2Code===countryCode)
        }else{
            throw new Error('unable to fetch data')
        }
    }


 
 

let getLocation=async ()=>{
     let response=await fetch(`https://ipinfo.io/json?token=206c07c9081e7e`)
        if(response.status===200){
            let data=await response.json()
            return data
        }else{
            throw new Error('unable to fetch data')
        }
    }

    let getCurrentCountry=async()=>{
         let location=await getLocation()   
         return getCountry(location.country)
         
    }

      

let getEmployeeInfo=async ()=>{
     let response=fetch(`http://localhost:51280/api/Employee`)
        if(response.status===200){
           let data= await response.json()
           return data
        }else{
            throw new Error('unable to fetch data')
        }
    
    }



// let getEmployeeInfo=()=>{
//     fetch(`http://localhost:51280/api/Employee`).then((response)=>{
//        if(response.status===200){
//            return response.json()
//        }else{
//            throw new Error('unable to fetch data')
//        }
//    }).then((data)=>{
//        return data
//    })
// }

// const getCountry=(countryCode)=>new Promise((resolve,reject)=>{
//     const request=new XMLHttpRequest()

//     request.addEventListener('readystatechange',(e)=>{
//         if(e.target.readyState===4){
//             const countries=JSON.parse(e.target.responseText)
//             let country=countries.find(c=>c.alpha2Code===countryCode)
//              resolve(country.name)
//         }
//         else if(e.target.readyState===4){
//            reject('an error has take place')
//         }
//     })
    
//     request.open('GET','http://restcountries.eu/rest/v2/all')
//     request.send()
// })
      

// const getPuzzle=(wordCount)=>new Promise((resolve,reject)=>{
//     const request=new XMLHttpRequest()

//     request.addEventListener('readystatechange',(e)=>{
//          if(e.target.readyState===4 && e.target.status===200){
//              const data =JSON.parse(e.target.responseText)
//              resolve(data.puzzle)
//              }else if(e.target.readyState===4){
//                  reject('An Error has taken place')
//              }
//     })
 
//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })