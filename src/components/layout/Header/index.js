import React from 'react'
import Play from '../../icons/Play'
import SearchBar from '../../shared/SearchBar'

const Header = ({ fontClass, wordData }) => {
  return (
    <>
      <SearchBar classes="mt-[24px]" fontClass={fontClass} />
      <div
        className={`flex justify-between items-center mt-[28px]
    `}
      >
        <div>
          <h1 className={`${fontClass} font-bold`}>{wordData.word}</h1>
          <p className={`${fontClass} text-dark-orchid`}>/ˈkiːbɔːd/</p>
        </div>
        <div>
          <Play audioFile={wordData.phonetics} />
        </div>
      </div>
    </>
  )
}

export default Header
