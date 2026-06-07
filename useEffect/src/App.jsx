// import React,{useState,useEffect} from 'react'

// const App = () => {
//   const [number1, setNumber1] = useState(0)
//   const [number2, setNumber2] = useState(0)
//   const [number3, setNumber3] = useState(0)


//   // useEffect(function(){
//   //   console.log("number is changed")
//   // })


//   useEffect(function(){
//     console.log("Number1 is changed")
//   },[number2])
//   return (
//     <div>
//       <h1>{number1}</h1>
//       <button onClick={()=>
//         setNumber1(number1 + 1)
//       }> change number</button>
//       <br/>
//       <h1>{number2}</h1>
//       <button onClick={()=>
//         setNumber2(number2 + 9)
//       }> change number</button>
//       <br/>
//       <h1>{number3}</h1>
//       <button onClick={()=>
//         setNumber3(number3+ 10)
//       }> change number</button>
//       <br/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const App = () => {
 const [allpokemon,setAllpokemon] = useState([])
    const getData = async()=>{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
      console.log(response);
      
      setAllpokemon(response.data.results)
    }
    useEffect(function(){
      getData()
    },[])

  return (
   
    <div>
      <button onClick={getData}>Change card</button>
      {allpokemon.map(function(elem,idx){
        return <h1 key={idx}>{elem.name}</h1>

      })}
      
    </div>
  )
}

export default App
