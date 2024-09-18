import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("username", JSON.stringify({ username: usernameRef.current.value }))
    navigate("/dashboard")
  }
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" ref={usernameRef} placeholder='Enter Username' /> <br /><br />
        <input type="password" ref={passwordRef} placeholder='Enter Password' /> <br /><br />
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login