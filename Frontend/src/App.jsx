import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import SendMoney from './pages/SendMoney'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/send' element={<SendMoney friendName={"Sample"}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
