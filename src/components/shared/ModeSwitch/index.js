import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Moon from '../../icons/Moon'

const ModeSwitch = ({ mode }) => {
  const [toggleSwtich, setToggleSwitch] = useState(false)
  return (
    <div
      className="flex gap-[10px] items-center pt-4
    "
    >
      <ReactSwitch
        checked={toggleSwtich}
        onChange={() => setToggleSwitch(!toggleSwtich)}
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
      <Moon mode={mode} toggleSwitch={toggleSwtich} />
    </div>
  )
}

export default ModeSwitch
