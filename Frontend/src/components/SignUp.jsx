import React from 'react'
import Heading from './auth-components/Heading'
import SubHeading from './auth-components/SubHeading'
import InputBox from './auth-components/InputBox'
import Button from './auth-components/Button'
import BottomWarn from './auth-components/BottomWarn'

function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className='border rounded-xl p-6'>
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox type={"text"} label={"First Name"} placeholder={"John"}/>
            <InputBox type={"text"} label={"Last Name"} placeholder={"Doe"}/>
            <InputBox type={"email"} label={"Email"} placeholder={"jhondoe@example.con"}/>
            <InputBox type={"password"} label={"Password"} />
            <Button label={"Sign Up"}></Button>
            <BottomWarn label={"Already have an account?"} btnText={"Login"}/>
        </div>
    </div>
    
  )
}

export default SignUp