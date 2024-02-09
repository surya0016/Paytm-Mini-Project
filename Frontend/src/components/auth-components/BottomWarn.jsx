import React from 'react'
import { useNavigate } from 'react-router-dom'

function BottomWarn({label, btnText, to}) {
  const navigate = useNavigate()
  return (
    <div className='font-semibold text-center mt-1'>
        {label + " "}
        <span onClick={()=>{navigate(to)}} className='underline decoration hover:cursor-pointer text-black hover:text-slate-500'>{btnText}</span>
    </div>
  )
}

export default BottomWarn