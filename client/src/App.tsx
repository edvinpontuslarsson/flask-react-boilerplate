import React, { useContext } from 'react'
import './App.css'
import { Context as answerContext } from './contexts/handleAnswer'

const App: React.FC = () => {
  const { answer } = useContext(answerContext)

  return <></>
}

export default App
