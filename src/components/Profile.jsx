import {useEffect} from "react"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
const Profile =()=>{
const {isLogin,userInfo} = useSelector(state=>state.user)
const navigate = useNavigate()
useEffect(()=>{
  if(!isLogin) navigate("/") 
},[])
  return (
      <>
      Hello {userInfo.firstName}
      </>
  ) 
}

export default Profile
