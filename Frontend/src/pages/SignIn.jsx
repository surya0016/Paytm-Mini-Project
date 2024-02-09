import React, { useState } from 'react'
import Heading from '../components/auth-components/Heading'
import BottomWarn from '../components/auth-components/BottomWarn'
import SubHeading from '../components/auth-components/SubHeading'
import InputBox from '../components/auth-components/InputBox'
import Button from '../components/auth-components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate =  useNavigate()
  return (
    <div className='flex justify-center items-center h-screen bg-zinc-50'>
        <div className="border rounded-xl p-6 shadow-lg">
            <Heading label={"Login"}/>
            <SubHeading label={"Enter your crendential to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"} onchange={(e)=>setUsername(e.target.value)}/>
            <InputBox label={"Password"} type={"password"} onchange={(e)=>setPassword(e.target.value)}/>
            <Button label={"Login"} onClickFunc={async ()=>{
              const response = await axios.post("http://localhost:4000/api/v1/user/signin",{
                username,
                password
              })
              localStorage.set("token",response.data.token)
              if(response.data.msg === "User created successfully !"){
                navigate('/dashboard')
              }
            }}/>
            <BottomWarn label={"Already have an acocount?"} btnText={"Sign Up"} to={"/signup"}/>
        </div>
    </div>
  )
}

export default SignIn