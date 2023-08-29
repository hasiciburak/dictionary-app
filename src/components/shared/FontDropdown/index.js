import React, { useState } from 'react'
import arrowDown from '../../../assets/images/icon-arrow-down.svg'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
const FontDropdown = ({ buttonContent, setButtonContent, fontClass }) => {
  const [open, setOpen] = useState(false)

  const handleClickOutside = () => {
    setOpen(false)
  }

  const handleFontClick = (content) => {
    setButtonContent(content)
    setOpen(false)
  }

  const buttonRef = useOutsideClick(handleClickOutside)

  return (
    <div className="relative z-20">
      <button className="flex items-center gap-[1.125rem]" onClick={() => setOpen(!open)}>
        <span className={`${fontClass} body-m font-bold`}>{buttonContent}</span>
        <img src={arrowDown} alt="Dropdown Icon" />
      </button>
      {open && (
        <ul
          ref={buttonRef}
          className="text-left body-m font-bold p-6 absolute z-10 bg-white min-w-[183px] rounded-2xl shadow-[0px_5px_30px_0px_rgba(0,0,0,0.10)] mt-4"
        >
          <li
            className="hover:text-dark-orchid mb-4 cursor-pointer"
            onClick={() => {
              handleFontClick('Sans Serif')
            }}
          >
            Sans Serif
          </li>
          <li
            className="hover:text-dark-orchid font-lora mb-4 cursor-pointer"
            onClick={() => {
              handleFontClick('Serif')
            }}
          >
            Serif
          </li>
          <li
            className="hover:text-dark-orchid font-inconsolata cursor-pointer"
            onClick={() => {
              handleFontClick('Mono')
            }}
          >
            Mono
          </li>
        </ul>
      )}
    </div>
  )
}

export default FontDropdown
