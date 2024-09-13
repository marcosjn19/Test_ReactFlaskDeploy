import './App.css'
import { useState, useEffect } from 'react'
import { XFollowCard } from './XFollowCard.jsx'
import axios from "axios"

export function App () {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:5555/api/users")
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