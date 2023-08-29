import React from 'react'
import newWindowIcon from '../../../assets/images/icon-new-window.svg'
const SourceArea = ({ fontClass }) => {
  return (
    <div className="mt-[32px]">
      <hr />
      <p className={`${fontClass} mt-[24px] text-custom-gray underline`}>Source</p>
      <div className="mt-[7px] flex gap-[15px]">
        <a href="https://www.google.com" target="_blank" className={`${fontClass}`}>
          https://www.google.com
        </a>
        <img src={newWindowIcon} alt="New window Icon" />
      </div>
    </div>
  )
}

export default SourceArea
