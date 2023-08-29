import React from 'react'

const MeaningArea = ({ fontClass }) => {
  const listClasses = 'text-dark-orchid mt-[13px]'
  const listSpanClasses = `text-custom-black ${fontClass} dark:text-white`

  return (
    <div className="">
      <div className="flex flex-row w-full items-center gap-[19px] mt-[34px]">
        <p className={`${fontClass} font-bold`}>noun</p>
        <div className="w-full align-middle">
          <div className="self-stretch h-[1px] bg-custom-gray-2 w-full"></div>
        </div>
      </div>
      <div className="mt-[31px]">
        <p className={`${fontClass} text-custom-gray`}> Meaning</p>
        <ul className={`list-disc list-outside ms-4 mt-[16px] ${fontClass}`}>
          <li className={listClasses}>
            <span className={listSpanClasses}>(etc.) A set of keys used to operate a typewriter, computer etc.</span>
          </li>
          <li className={listClasses}>
            <span className={listSpanClasses}>
              A component of many instruments including the piano, organ, and harpsichord consisting of usually black
              and white keys that cause different tones to be produced when struck.
            </span>
          </li>
          <li className={listClasses}>
            <span className={listSpanClasses}>
              A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be
              built into or separate from the keyboard device.
            </span>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-[26px] mt-[24px]">
        <p className={`${fontClass}`}>Synonms</p>
        <p className={`${fontClass} text-dark-orchid font-bold`}>Electric keyboard</p>
      </div>
    </div>
  )
}

export default MeaningArea
