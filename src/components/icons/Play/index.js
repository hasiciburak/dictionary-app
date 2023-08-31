import React from 'react'

const Play = ({ audioFile }) => {
  const playAudio = () => {
    console.log('ALL AUDIOS', audioFile)
    // Filtering logic
    // Sometimes some data can get empty and we can get issues on it
    // So we need to filter if any url not exists.
    // For this challenge we have only one
    const data = Array.isArray(audioFile) && audioFile.filter((item) => item.audio !== '')
    console.log('FILTERED AUDIOS', data)
    const audio = new Audio(data[0].audio)
    audio.play()
  }

  return (
    <svg
      className="play-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      viewBox="0 0 75 75"
      onClick={playAudio}
    >
      <g fill="#A445ED" fillRule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
        <path d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  )
}

export default Play
