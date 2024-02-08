import React from 'react'
function InputBox({label, placeholder, type}) {
  return (
    <div className="flex flex-col mb-3">
        <div className='font-semibold py-2 '>{label}</div>
        <input type={type} placeholder={placeholder} className='w-full border rounded-md px-3 py-1.5 outline-none'/>
    </div>
  )
}

export default InputBox