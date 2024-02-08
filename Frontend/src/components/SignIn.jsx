import React from 'react'
import Heading from './auth-components/Heading'
import BottomWarn from './auth-components/BottomWarn'
import SubHeading from './auth-components/SubHeading'
import InputBox from './auth-components/InputBox'
import Button from './auth-components/Button'

function SignIn() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="border rounded-xl p-6">
            <Heading label={"Login"}/>
            <SubHeading label={"Enter your crendential to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} type={"email"}/>
            <InputBox label={"Password"} type={"password"}/>
            <Button label={"Login"}/>
            <BottomWarn label={"Already have an acocount?"} btnText={"Sign Up"}/>
        </div>
    </div>
  )
}

export default SignIn