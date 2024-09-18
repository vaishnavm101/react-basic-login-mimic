import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [username, setUsername] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    const str = localStorage.getItem("username")
    if (str) {
      const obj = JSON.parse(str)
      setUsername(obj.username)
    }
    else {
      navigate("/login")
      return;
    }
  }, [])
  return (
    <>
      <h1>Home Page</h1>
      <h2>Welcome {username}</h2>
    </>
  )
}

export default Home