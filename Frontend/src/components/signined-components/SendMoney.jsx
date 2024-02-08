import React from 'react'
import Heading from '../auth-components/Heading'
import InputBox from '../auth-components/InputBox'
import Button from '../auth-components/Button'

function SendMoney({friendName}) {
    const arr = friendName.split("");
    const initial = arr[0].toUpperCase();
  return (
    <div className='flex justify-center items-center h-screen bg-zinc-100'>
        <div className="border rounded-lg p-6 bg-white  shadow-lg w-96">
            <Heading label={"Send Money"}/>
            <div className="">
                <span className='inline-flex justify-center items-center bg-green-500 w-10 h-10 rounded-full mr-3'><span className='font-semibold text-white text-xl'>{initial}</span></span>
                <span className='font-semibold text-xl'>{friendName}</span>
            </div>
            <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"} type={"number"}/>
            <button className='bg-green-500 py-1.5 px-3 rounded-md w-full text-white'>Initiate Transfer</button>
        </div>
    </div>
  )
}

export default SendMoney