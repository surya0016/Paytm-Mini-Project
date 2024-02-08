import React from 'react'

function TestDashBoard() {
  return (
    <div>
        <div className="navbar flex justify-between items-center border-b">
            <span className='font-bold text-2xl m-4'>Payments App</span><span>Hello, User<span className='m-4 bg-zinc-300 rounded-full inline-flex justify-center items-center w-8 h-8'><span>U1</span></span></span>
        </div>
        <div className="m-3">
            <div className="font-bold text-xl mb-4">Your Balance $5000</div>
            <div className='flex flex-col'>
                <label htmlFor="searchuser" className='font-bold text-xl mb-3'>Users</label>
                <input type="text" placeholder='Search users....' className='w-ful border rounded-md px-3 py-1.5 outline-none'/>
            </div>
            <div className="my-3">
                <div className="flex justify-between items-center">
                    <span>
                        <span className='my-3 mr-3 bg-zinc-300 rounded-full inline-flex w-9 h-9 justify-center items-center'><span>U1</span></span>    
                        <span className='font-semibold'>User 1</span>
                    </span>
                    <span>
                        <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800'>Send money</button>
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <span className='my-3 mr-3 bg-zinc-300 rounded-full inline-flex w-9 h-9 justify-center items-center'><span>U1</span></span>    
                        <span className='font-semibold'>User 1</span>
                    </span>
                    <span>
                        <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800'>Send money</button>
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span>
                        <span className='my-3 mr-3 bg-zinc-300 rounded-full inline-flex w-9 h-9 justify-center items-center'><span>U1</span></span>    
                        <span className='font-semibold'>User 1</span>
                    </span>
                    <span>
                        <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800'>Send money</button>
                    </span>
                </div>   
            </div>
        </div> 
    </div>
  )
}

export default TestDashBoard