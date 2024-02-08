import React from 'react'

function Users({friends}) {
    
  return (
    <div className=' m-3'>
        <div className='flex flex-col'>
            <label htmlFor="searchuser" className='font-bold text-xl mb-3'>Users</label>
            <input type="text" placeholder='Search users....' className='w-ful border rounded-md px-3 py-1.5 outline-none'/>
        </div>
        <div className="my-3">
            {friends.map((friend)=>{
                const arr = friend.split("")
                const initial = arr[0].toUpperCase()
                return(
                    <div className="flex justify-between items-center">
                        <span>
                            <span className='my-3 mr-3 bg-zinc-300 rounded-full inline-flex w-9 h-9 justify-center items-center'><span>{initial}</span></span>    
                            <span className='font-semibold'>{friend}</span>
                        </span>
                        <span>
                            <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800'>Send money</button>
                        </span>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default Users