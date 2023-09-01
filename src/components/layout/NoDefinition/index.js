import React, { useEffect } from 'react'

const NoDefinition = ({ errorInfo }) => {
  useEffect(() => {
    console.log('ERRORINFO', errorInfo)
  })
  return (
    <div className="mt-[132px] text-center mx-auto">
      <h1>😕</h1>
      <h2 className="font-bold mt-[44px]">{errorInfo.response.data.title}</h2>
      <p className="mt-[24px] text-custom-gray">
        {errorInfo.response.data.message}
        {errorInfo.response.data.resolution}
      </p>
    </div>
  )
}

export default NoDefinition
