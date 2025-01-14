import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeadShot from './components/HeadShot'
import MainNavBar from './components/mainNavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainNavBar/>
      <HeadShot/>
    </>
  )
}

export default App
