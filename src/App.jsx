import './App.css'
import { useState, useEffect } from 'react'
import { XFollowCard } from './XFollowCard.jsx'
import axios from "axios"

export function App () {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("https://reactxfollowcard-server-demo-1.onrender.com:10000/api/users")
    setArray(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  

  return (
    <section className='App'>
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