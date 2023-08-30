import { useEffect, useState } from 'react'
import './App.scss'
import Navigation from './components/layout/Navigation'
import Header from './components/layout/Header'
import MeaningArea from './components/layout/MeaningArea'
import SourceArea from './components/layout/SourceArea'

function App() {
  const [mode, setMode] = useState()
  const [buttonContent, setButtonContent] = useState('Sans Serif')
  const [fontClass, setFontClass] = useState(buttonContent)

  const font =
    buttonContent === 'Sans Serif'
      ? 'font-inter'
      : buttonContent === 'Serif'
      ? 'font-lora'
      : buttonContent === 'Mono'
      ? 'font-inconsolata'
      : ''

  useEffect(() => {
    setFontClass(font)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonContent])

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const colorScheme = event.matches ? 'dark' : 'light'
      console.log('COLOR SCHEME', colorScheme) // "dark" or "light"
      setMode(colorScheme)
    })
  }, [])

  return (
    <div className={`App ${fontClass}`}>
      <Navigation
        buttonContent={buttonContent}
        setButtonContent={setButtonContent}
        fontClass={fontClass}
        mode={mode}
        setMode={setMode}
      />
      <Header fontClass={fontClass} />
      <MeaningArea fontClass={fontClass} />
      <MeaningArea fontClass={fontClass} />
      <SourceArea fontClass={fontClass} />
      {/* IF THERE IS NO DEFINITION PROVIDED */}
      {/* <NoDefinition /> */}
    </div>
  )
}

export default App
