import { useEffect, useState } from 'react'
import './App.scss'
import Play from './components/icons/Play'
import ModeSwitch from './components/shared/ModeSwitch'
import Header from './components/layout/Header'

function App() {
  const [mode, setMode] = useState()
  const [buttonContent, setButtonContent] = useState('Sans Serif')

  const fontClass =
    buttonContent === 'Sans Serif'
      ? 'font-inter'
      : buttonContent === 'Serif'
      ? 'font-lora'
      : buttonContent === 'Mono'
      ? 'font-inconsolata'
      : ''

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const colorScheme = event.matches ? 'dark' : 'light'
      console.log('COLOR SCHEME', colorScheme) // "dark" or "light"
      setMode(colorScheme)
    })
  }, [])

  return (
    <div className={`App ${fontClass}`}>
      <Header buttonContent={buttonContent} setButtonContent={setButtonContent} fontClass={fontClass} />
      <h1 className={`font-bold ${fontClass}`}>Aliquam</h1>
      <Play />
      {/* IF THERE IS NO DEFINITION PROVIDED */}
      {/* <NoDefinition /> */}
    </div>
  )
}

export default App
