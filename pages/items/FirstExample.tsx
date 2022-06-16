import React from 'react'
import style from './index.module.css'

interface Props {}

const FirstExample: React.FC<Props> = (props) => {
  return (
    <iframe
      className={style.example}
      src="https://codesandbox.io/s/friendly-ride-lymyw2?file=/src/component/PortalFrame.tsx:3346-3357"
      title="传送门窗口测试"
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  )
}

export default FirstExample
