import React from 'react'
import Search from '../../icons/Search'

const SearchBar = ({ classes, fontClass, keyword, keywordRef, setKeyword }) => {
  const searchWord = () => {
    console.log('KEYWORD', keywordRef.current.value)
    setKeyword(keywordRef.current.value)
  }
  return (
    <div
      className={`${classes} flex justify-between bg-custom-gray-2 px-[24px] py-[22px] rounded-2xl dark:bg-custom-black-2 search-wrapper border-[1px] border-transparent focus-within:border-dark-orchid`}
    >
      <input
        className={`bg-custom-gray-2 focus-visible:border-0 focus-visible:outline-none text-base md:text-xl font-bold ${fontClass} text-custom-black-3 dark:bg-custom-black-2 dark:text-white dark:placeholder-opacity-25 search-input w-full`}
        ref={keywordRef}
        placeholder="Ex: keyboard"
      />
      <Search onClick={searchWord} />
    </div>
  )
}

export default SearchBar
