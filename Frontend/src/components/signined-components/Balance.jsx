import axios from 'axios'
import React from 'react'

function Balance() {
  // const response = await axios.get("http://localhost:4000/api/v1/account/balance",{
  //   headers:{
  //     Authorization:"Bearer "+localStorage.getItem("token")
  //   }
  // })
  // const amount = await response.data.balance
  return (
    <div className="font-bold text-xl m-3 mb-4 ">Your Balance {"₹"+6000}</div>
  )
}

export default Balance