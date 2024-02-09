import React from 'react'

function SignIn() {
  return (
    <form action="">
        <div className='flex justify-center items-center h-screen'>
            <div className="border-2 rounded-xl p-6 w-96">
                <h1 className='text-center font-bold text-3xl font-san '>Sign In</h1>
                <div className="flex flex-col items-center text-slate-500 my-2"><span>Enter your credential to access your</span><span> account</span></div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="username" className='font-semibold py-1'>Email</label>
                    <input type="email" placeholder='johndoe@example.com' id='username' className='border rounded-md px-3 py-1.5 outline-none'/>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="username" className='font-semibold py-1'>Password</label>
                    <input type="password" id='username' className='border rounded-md px-3 py-1.5 outline-none'/>
                </div>
                <button className='px-3 py-1.5 rounded-md text-white bg-black hover:bg-zinc-800 w-full mb-3 '>Login</button>
                <div className='font-semibold text-center'>Don't have an account? <span className='underline decoration hover:cursor-pointer hover:text-zinc-700'>Sign Up</span></div>
            </div>
        </div>
    </form>
  )
}

export default SignIn