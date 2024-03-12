import {useEffect} from "react"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
const Profile =()=>{
const {isLogin,userInfo} = useSelector(state=>state.user)
console.log(userInfo)
const navigate = useNavigate()
useEffect(()=>{
  if(!isLogin) navigate("/")
},[])
  return (
      <>
      Hello {userInfo.firstName + userInfo.lastName}
      </>
  ) 
}

export default Profile
