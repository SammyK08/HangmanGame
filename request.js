const getPuzzle=(callback)=>{
  
const request=new XMLHttpRequest()

       request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState===4 && e.target.status===200){
                const data =JSON.parse(e.target.responseText)
                callback(undefined,data.puzzle)
                }else if(e.target.readyState===4){
                    callback('an error has taken place',undefined)
                }
       })
    
       request.open('GET','http://puzzle.mead.io/puzzle')
       request.send()

       

const getCountry=(countryCode, callback)=>{
        const request=new XMLHttpRequest()

        request.addEventListener('readystatechange',(e)=>{
            if(e.target.readyState===4){
                const countries=JSON.parse(e.target.responseText)
                let country=countries.find(c=>c.alpha2Code==='US')
                 callback(undefined,country)
            }
            else if(e.target.readyState===4){
                callback('unable to fetch data')
            }
        })
        
        request.open('GET','http://restcountries.eu/rest/v2/all')
        request.send()
       }
}