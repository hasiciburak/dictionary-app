import { useEffect, useState } from 'react'
import './App.scss'
import Play from './components/icons/Play'
import ModeSwitch from './components/shared/ModeSwitch'

function App() {
  const [mode, setMode] = useState()

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const colorScheme = event.matches ? 'dark' : 'light'
      console.log(colorScheme) // "dark" or "light"
      setMode(colorScheme)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="font-lora font-bold">Aliquam</h1>
      <Play />
      <ModeSwitch mode={mode} />
    </div>
  )
}

export default App
