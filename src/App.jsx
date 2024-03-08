import {Outlet} from "react-router-dom"
import NavBar from "./components/NavBar"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
function App() {
  const navigate=useNavigate()
  const { isLogin} = useSelector((state) => state.user);
  
useEffect(()=>{
 if(isLogin) navigate("/profile")  
},[isLogin])
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default App
