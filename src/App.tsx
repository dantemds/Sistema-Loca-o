import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header.jsx'
import SideBar from './component/SideBar/SideBar.jsx'
import Main from './template/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Main/>
    </div>
  )
}

export default App
