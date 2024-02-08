import React from 'react'

function BottomWarn({label, btnText}) {
  return (
    <div className='font-semibold text-center mt-1'>
        {label + " "}
        <span className='underline decoration hover:cursor-pointer text-black hover:text-slate-500'>{btnText}</span>
    </div>
  )
}

export default BottomWarn