import React, { useState } from 'react'
import Heading from '../components/auth-components/Heading'
import InputBox from '../components/auth-components/InputBox'
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';


function SendMoney() {
    const [amount , setAmount] = useState("")
    const [searchParam, setSearchParam] = useSearchParams();
    const friendName = searchParam.get('name')
    const id = searchParam.get('id')
    const navigate = useNavigate();
    return (
    <div className='flex justify-center items-center h-screen bg-zinc-100'>
        <div className="border rounded-lg p-6 bg-white  shadow-lg w-96">
            <Heading label={"Send Money"}/>
            <div className="">
                <span className='inline-flex justify-center items-center bg-green-500 w-10 h-10 rounded-full mr-3'><span className='font-semibold text-white text-xl'>{friendName[0].toUpperCase()}</span></span>
                <span className='font-semibold text-xl'>{friendName}</span>
            </div>
            <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"} type={"number"} onchange={(e)=>setAmount(e.target.value)}/>
            <button className='bg-green-500 py-1.5 px-3 rounded-md w-full text-white'onClick={async()=>{
              const response = axios({
                url:"http://localhost:4000/api/v1/account/transfer",
                method:"POST",
                data:{
                  to:id,
                  amount:amount,
                },
                headers:{
                  'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                  'Content-Type':'application/json'
                }
              })
            }}>Initiate Transfer</button>
        </div>
    </div>
  )
}


export default SendMoney