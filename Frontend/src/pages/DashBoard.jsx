import React from 'react'
import AppBar from '../components/signined-components/AppBar'
import Balance from '../components/signined-components/Balance'
import Users from '../components/signined-components/Users'

function DashBoard() {
  return (
    <div >
        <AppBar username={"Surya"}/>
        <Balance amount={5000}/>
        <Users friends={["Shubham","Jagdish","Anuj","Karan"]}/>
    </div>
  )
}

export default DashBoard