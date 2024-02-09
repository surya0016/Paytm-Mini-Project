import React from 'react'
import AppBar from '../components/signined-components/AppBar'
import Balance from '../components/signined-components/Balance'
import Users from '../components/signined-components/Users'

function DashBoard() {
  return (
    <div >
        <AppBar username={"Surya"}/>
        <Balance />
        <Users />
    </div>
  )
}

export default DashBoard