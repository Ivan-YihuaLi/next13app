'use client'

import { ReactNode, useEffect, useState } from 'react'

const Page = ({ children }: { children: React.ReactNode }) => {
  const [second, setSecond] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setSecond(second + 1)
    }, 1000)
  })
  return <h1>{`Hello Dashboard! ${second}`}</h1>
}

export default Page
