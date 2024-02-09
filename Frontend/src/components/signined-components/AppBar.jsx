import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AppBar() {
  const [users,setUsers] = useState("asmple") 
  const inital = users[0].toUpperCase()
  useEffect(()=>{axios.get("http://localhost:4000/api/v1/user/bulk?",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(response => setUsers(response.data.appuser))
        
      },[users])
  return (
    <div className="navbar flex justify-between items-center border-b">
        <span className='font-bold text-2xl m-4'>PayTM App</span><span>Hello, {users}<span className='m-4 bg-zinc-300 rounded-full inline-flex justify-center items-center w-8 h-8'><span>{inital}</span></span></span>
    </div>
  )
}

export default AppBar