import React from 'react'
import Play from '../../icons/Play'
import SearchBar from '../../shared/SearchBar'

const Header = ({ fontClass }) => {
  return (
    <>
      <SearchBar classes="mt-[24px]" />
      <div
        className={`flex justify-between items-center mt-[28px]
    `}
      >
        <div>
          <h1 className={`${fontClass} font-bold`}>keyboard</h1>
          <p className={`${fontClass} text-dark-orchid`}>/ˈkiːbɔːd/</p>
        </div>
        <div>
          <Play />
        </div>
      </div>
    </>
  )
}

export default Header
