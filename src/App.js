import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Navigation from './components/layout/Navigation'
import Header from './components/layout/Header'
import MeaningArea from './components/layout/MeaningArea'
import SourceArea from './components/layout/SourceArea'
import axios from 'axios'
import NoDefinition from './components/layout/NoDefinition'

function App() {
  const [mode, setMode] = useState()
  const [buttonContent, setButtonContent] = useState('Sans Serif')
  const [fontClass, setFontClass] = useState(buttonContent)
  const [wordData, setWordData] = useState({})
  const [error, setError] = useState(null)
  const [keyword, setKeyword] = useState('')
  const keywordRef = useRef()

  const font =
    buttonContent === 'Sans Serif'
      ? 'font-inter'
      : buttonContent === 'Serif'
      ? 'font-lora'
      : buttonContent === 'Mono'
      ? 'font-inconsolata'
      : ''

  const getData = async () => {
    if (keyword !== '') {
      try {
        const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
        setWordData(data[0])
        setError(null)
      } catch (error) {
        setError(error)
      }
    }
  }

  useEffect(() => {
    setFontClass(font)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonContent])

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])

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
      <Header
        fontClass={fontClass}
        wordData={wordData}
        error={error}
        keyword={keyword}
        keywordRef={keywordRef}
        setKeyword={setKeyword}
      />
      {error && keyword !== '' ? (
        <NoDefinition errorInfo={error} />
      ) : !error && keyword !== '' ? (
        <>
          {wordData?.meanings?.map((meaning, index) => (
            <MeaningArea fontClass={fontClass} meaning={meaning} key={Math.random()} index={index} />
          ))}
          <SourceArea fontClass={fontClass} urls={wordData.sourceUrls} />
        </>
      ) : (
        <div></div>
      )}

      {/* IF THERE IS NO DEFINITION PROVIDED */}
    </div>
  )
}

export default App
