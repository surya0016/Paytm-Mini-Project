import React from 'react'

function Balance({amount}) {
  return (
    <div className="font-bold text-xl m-3 mb-4 ">Your Balance {"₹"+amount}</div>
  )
}

export default Balance