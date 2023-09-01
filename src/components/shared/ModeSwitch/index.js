import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Moon from '../../icons/Moon'

const ModeSwitch = ({ mode, setMode }) => {
  const [toggleSwitch, setToggleSwitch] = useState(false)
  return (
    <div
      className="flex gap-[10px] items-center
    "
    >
      <ReactSwitch
        checked={toggleSwitch}
        onChange={() => {
          setToggleSwitch(!toggleSwitch)
          console.log('Toggle switch', toggleSwitch)
          toggleSwitch ? setMode('dark') : setMode('light')
          console.log('MODE', mode)
        }}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={14}
        height={20}
        width={40}
        onColor={'#A445ED'}
        offColor={'#757575'}
        onHandleColor="#FFFFFF"
        offHandleColor="#FFFFFF"
      />
      <Moon toggleSwitch={toggleSwitch} />
    </div>
  )
}

export default ModeSwitch
