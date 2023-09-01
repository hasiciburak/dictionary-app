import React from 'react'
import FontDropdown from '../../shared/FontDropdown'
import bookIcon from '../../../assets/images/logo.svg'
const Navigation = ({ buttonContent, setButtonContent, fontClass, mode, setMode }) => {
  return (
    <div className="flex justify-between">
      <img src={bookIcon} alt="Dictionary Book Icon" className="h-[32px] md:h-[36.5px]" />
      <div className="flex items-center gap-[26px]">
        <FontDropdown buttonContent={buttonContent} setButtonContent={setButtonContent} fontClass={fontClass} />
        <span className="w-[1px] h-full bg-custom-gray-2"></span>
      </div>
    </div>
  )
}

export default Navigation
