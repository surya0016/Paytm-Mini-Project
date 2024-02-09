import React from 'react'
import Heading from '../components/auth-components/Heading'
import BottomWarn from '../components/auth-components/BottomWarn'
import SubHeading from '../components/auth-components/SubHeading'
import InputBox from '../components/auth-components/InputBox'
import Button from '../components/auth-components/Button'

function SignIn() {
  return (
    <div className='flex justify-center items-center h-screen bg-zinc-50'>
        <div className="border rounded-xl p-6 shadow-lg">
            <Heading label={"Login"}/>
            <SubHeading label={"Enter your crendential to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"}/>
            <InputBox label={"Password"} type={"password"}/>
            <Button label={"Login"}/>
            <BottomWarn label={"Already have an acocount?"} btnText={"Sign Up"} to={"/signup"}/>
        </div>
    </div>
  )
}

export default SignIn