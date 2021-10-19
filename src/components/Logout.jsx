import { useContext } from "react"
import { AuthContext } from "../App"

export default function Logout () {
  const { setUser, setIsLoggedIn } = useContext (AuthContext)
  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
  }
  return <button onClick={() => handleLogout()}>Logout</button>
}