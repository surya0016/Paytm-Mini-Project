import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([{
        firstName:"Surya",
        lastName:"Shankar",
        _id:1,
    }])
    const [filter,setFilter] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:4000/api/v1/user/bulk?filter="+filter)
        .then(response => setUsers(response.data.user))
    })
  return (
    <div className=' m-3'>
        <div className='flex flex-col'>
            <label htmlFor="searchuser" className='font-bold text-xl mb-3'>Users</label>
            <input type="text" onChange={(e)=>{setFilter(e.target.value)}} placeholder='Search users....' className='w-ful border rounded-md px-3 py-1.5 outline-none'/>
        </div>
        <div className="my-3">
            {users.map((user,index)=><User key={index} user={user}/>)}
        </div>
        
    </div>
  )
}

const User = ({user}) => {
    return(
        <div className="flex justify-between items-center">
            <span>
                <span className='my-3 mr-3 bg-zinc-300 rounded-full inline-flex w-9 h-9 justify-center items-center'><span>{user.firstName[0].toUpperCase()}</span></span>    
                <span className='font-semibold'>{user.firstName} {user.lastName}</span>
            </span>
            <span> 
                <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800' onClick={()=>navigate('/send')}>Send money</button>
            </span>
        </div>
        )
}

export default Users