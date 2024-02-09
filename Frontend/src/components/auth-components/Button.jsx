import React from 'react'

function Button({label, onClickFunc, onchange}) {
  return (
    <button onClick={onClickFunc} type="button" className=" w-full mt-2 text-white bg-gray-900 hover:bg-gray-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>  
  )
}

export default Button