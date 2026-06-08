import { useState } from 'react'
import './App.css'
import { Contador } from './components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Práctica contador</h1>
      <Contador valor= {4} maximo= { 80 } minimo = { 0 } step = { 2 } />

    </>
  )
}

export default App
