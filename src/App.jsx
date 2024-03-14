import {Outlet} from "react-router-dom"
import NavBar from "./components/NavBar"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { useSelector ,useDispatch} from "react-redux";
import {getAuthUser} from "./redux/app/userSlice"
function App() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { isLogin} = useSelector((state) => state.user);
  
useEffect(()=>{
const token = localStorage.getItem("userToken")

if(token){
    dispatch(getAuthUser(token))
    
}
    
},[])
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default App
