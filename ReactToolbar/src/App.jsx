import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PrintCost from './components/PrintCost/PrintCost.jsx'
import Nav from './components/nav/Nav.jsx'
import './App.css'

function App() {

  return (
    <div className='body-container'>
     <Nav/>
     <PrintCost/>
    </div>
  )
}

export default App