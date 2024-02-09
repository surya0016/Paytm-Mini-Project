import React, { useState } from 'react'
import axios from 'axios'
function AppBar() {
  const [users,setUsers] = useState("")    
  axios.get("http://localhost:4000/api/v1/user/bulk?",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        .then(response => setUsers(response.data.appuser))
  return (
    <div className="navbar flex justify-between items-center border-b">
        <span className='font-bold text-2xl m-4'>PayTM App</span><span>Hello, {users}<span className='m-4 bg-zinc-300 rounded-full inline-flex justify-center items-center w-8 h-8'><span>{users[0].toUpperCase()}</span></span></span>
    </div>
  )
}

export default AppBar