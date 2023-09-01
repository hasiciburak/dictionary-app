import React from 'react'
import newWindowIcon from '../../../assets/images/icon-new-window.svg'
const SourceArea = ({ fontClass, urls }) => {
  return (
    <div className="mt-[32px] mb-[100px]">
      <hr />
      <p className={`${fontClass} mt-[24px] text-custom-gray underline`}>Source</p>
      {urls?.length > 0 &&
        urls.map((url) => (
          <div className="mt-[7px] flex flex-row gap-[15px] w-full">
            <a href={url} target="_blank" className={`${fontClass}`} rel="noreferrer">
              {url}
              <img src={newWindowIcon} alt="New window Icon" />
            </a>
          </div>
        ))}
    </div>
  )
}

export default SourceArea
