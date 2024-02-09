import axios from 'axios'
import React, { useState } from 'react'

function Balance() {
  const [amount, setAmount] = useState("")
  axios.get("http://localhost:4000/api/v1/account/balance",{
    headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
    }
  }).then(response => setAmount(response.data.balance))
  
  return (
    <div className="font-bold text-xl m-3 mb-4 ">Your Balance {"₹"+Math.floor(amount)}</div>
  )
}

export default Balance