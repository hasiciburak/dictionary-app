import React from 'react'
import Search from '../../icons/Search'

const SearchBar = ({ classes }) => {
  return (
    <div className={`${classes} flex justify-between bg-custom-gray-2 px-[24px] py-[22px] rounded-2xl`}>
      <input
        className="bg-custom-gray-2 focus-visible:border-0 focus-visible:outline-none "
        placeholder="Ex: keyboard"
      />
      <Search />
    </div>
  )
}

export default SearchBar
