import './App.css'
import { useState, useEffect } from 'react'
import { XFollowCard } from './XFollowCard.jsx'
import axios from "axios"

export function App () {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    console.log("Entro aqui")
    //const response = fetch("/api/users").then((r)=>r.json())
    const response = await axios.get("127.0.0.1:5555/api/users")
    console.log("Salgo aca")
    setArray(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  

  return (
    <section className='App'>
      <h1>probando</h1>
      {
        array.map(({ userName, name, isFollowing }) => (
          <XFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </XFollowCard>
        ))
      }
    </section>
  )
}