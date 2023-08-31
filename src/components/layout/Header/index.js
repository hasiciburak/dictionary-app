import React, { useEffect, useState } from 'react'
import Play from '../../icons/Play'
import SearchBar from '../../shared/SearchBar'

const Header = ({ fontClass, wordData }) => {
  const [phoneticWord, setPhoneticWord] = useState('')
  const filterPhonetic = () => {
    const data = Array.isArray(wordData.phonetics)
      ? wordData.phonetics.filter((item) => item.audio !== '' && item.text)
      : []
    setPhoneticWord(data[0]?.text)
  }

  useEffect(() => {
    filterPhonetic()
    console.log('PHONETIC', phoneticWord)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordData])
  return (
    <>
      <SearchBar classes="mt-[24px]" fontClass={fontClass} />
      <div
        className={`flex justify-between items-center mt-[28px]
    `}
      >
        <div>
          <h1 className={`${fontClass} font-bold`}>{wordData.word}</h1>
          <p className={`${fontClass} text-dark-orchid`}>{phoneticWord}</p>
        </div>
        <div>
          <Play audioFile={wordData.phonetics} />
        </div>
      </div>
    </>
  )
}

export default Header
