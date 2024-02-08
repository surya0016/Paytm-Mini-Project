import React from 'react'

function AppBar({username}) {
    const arr = username.split("");
    const initial = arr[0].toUpperCase();
  return (
    <div className="navbar flex justify-between items-center border-b">
        <span className='font-bold text-2xl m-4'>Payments App</span><span>Hello, {username}<span className='m-4 bg-zinc-300 rounded-full inline-flex justify-center items-center w-8 h-8'><span>{initial}</span></span></span>
    </div>
  )
}

export default AppBar