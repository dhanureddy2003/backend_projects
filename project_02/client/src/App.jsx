import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
      console.log(jokes)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
   <>
   <h1>jokes : {jokes.length} </h1>

   {
    jokes.map((joke)=>{
      return (
        <div key={joke.id}>
          <h1>{joke.setup}</h1>
          <h2>{joke.punchline}</h2>
        </div>
      )
    })
   }
   </>
  )
}

export default App
