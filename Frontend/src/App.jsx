import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SendMoney from './components/signined-components/SendMoney'
import DashBoard from './components/DashBoard'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/send' element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
