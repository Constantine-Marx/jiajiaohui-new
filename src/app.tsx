import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import './app.scss'
import { BrowserRouter } from "react-router-dom";

export default function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
