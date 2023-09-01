import React, { useEffect } from 'react'

const MeaningArea = ({ fontClass, meaning, index }) => {
  const listClasses = 'text-dark-orchid mt-[13px]'
  const listSpanClasses = `text-custom-black ${fontClass} dark:text-white`
  useEffect(() => {
    console.log(`MEANING ${index}`, meaning)
  }, [])
  return (
    <div className="">
      <div className="flex flex-row w-full items-center gap-[19px] mt-[34px]">
        <p className={`${fontClass}   font-bold`}>{meaning.partOfSpeech}</p>
        <div className="w-full align-middle">
          <div className="self-stretch h-[1px] bg-custom-gray-2 w-full"></div>
        </div>
      </div>
      <div className="mt-[31px]">
        <p className={`${fontClass} text-custom-gray`}> Meaning</p>

        <ul className={`list-disc list-outside ms-4 mt-[16px] ${fontClass}`}>
          {meaning?.definitions?.map((item) => (
            <li className={listClasses} key={Math.random()}>
              <span className={listSpanClasses}>{item.definition}</span>
            </li>
          ))}
        </ul>
      </div>
      {meaning?.synonyms?.length > 0 && (
        <div className="flex flex-row gap-[26px] mt-[24px]">
          <p className={`${fontClass}`}>Synonms</p>
          <p className={`${fontClass} text-dark-orchid font-bold`}>
            {Array.isArray(meaning.synonyms) && meaning?.synonyms[0]}
          </p>
        </div>
      )}
    </div>
  )
}

export default MeaningArea
