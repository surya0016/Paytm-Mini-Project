import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Dashboard from './components/DashBoard'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* <Route path='/send' element={<Send/>}/> */}
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
