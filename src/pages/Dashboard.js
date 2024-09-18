import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [username, setUsername] = useState()
  const navigate = useNavigate()
  // Try seprating below code into a custom hook and check in every page if user's logged in or not..
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
      <h1>Dashboard Page</h1>
      <h2>Welcome {username}</h2>
    </>
  )
}

export default Dashboard
