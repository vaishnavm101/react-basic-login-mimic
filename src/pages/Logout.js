import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.removeItem("username")
    navigate("/login")
  }, [])
  return null
}

export default Logout