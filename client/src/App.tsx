import React, { useState, useEffect } from 'react'
import { getIndex } from './helpers/apiCalls'
import './App.css'

const App: React.FC = () => {
  const [message, setMessage] = useState('')

  const fetchMessage = async () => {
    try {
      const payload = await getIndex()
      setMessage(payload.message)
    } catch (error) {
      setMessage('500 Internal Server Error')
    }
  }

  useEffect(() => {
    if (!message) {
      fetchMessage()
    }
  })

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
