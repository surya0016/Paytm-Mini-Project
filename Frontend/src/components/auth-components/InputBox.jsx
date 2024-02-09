import React from 'react'
function InputBox({label, placeholder, type, onchange}) {
  return (
    <div className="flex flex-col mb-3">
        <div className='font-semibold py-2 '>{label}</div>
        <input onChange={onchange}  type={type} placeholder={placeholder} className='w-full border rounded-md px-3 py-1.5 hover:border-slate-800 focus:outline-none focus:border-slate-800'/>
    </div>
  )
}

export default InputBox