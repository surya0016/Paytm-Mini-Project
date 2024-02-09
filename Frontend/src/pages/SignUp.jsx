import React, { useState } from 'react'
import Heading from '../components/auth-components/Heading'
import SubHeading from '../components/auth-components/SubHeading'
import InputBox from '../components/auth-components/InputBox'
import Button from '../components/auth-components/Button'
import BottomWarn from '../components/auth-components/BottomWarn'
import axios from 'axios'

function SignUp() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-50">
        <div className='border rounded-xl p-6 shadow-lg'>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"}/>

            <InputBox onchange={(e)=>{
              setFirstName(e.target.value)
            }} type={"text"} label={"First Name"} placeholder={"John"}/>

            <InputBox onchange={(e)=>{
              setLastName(e.target.value)
            }} type={"text"} label={"Last Name"} placeholder={"Doe"}/>

            <InputBox onchange={(e)=>{
              setUsername(e.target.value)
            }} type={"email"} label={"Email"} placeholder={"jhondoe@example.con"}/>

            <InputBox onchange={(e)=>{
              setPassword(e.target.value)
            }} type={"password"} label={"Password"} />

            <Button label={"Sign Up"} onClickFunc={async function(){
              const response =  await axios.post("http://localhost:4000/api/v1/user/signup",{
                username,
                firstName,
                lastName,
                password              
              })
              localStorage.setItem("token",response.data.token)
            }}/>
            <BottomWarn label={"Already have an account?"} btnText={"Login"} to={"/signin"}/>
        </div>
    </div>
    
  )
}

export default SignUp