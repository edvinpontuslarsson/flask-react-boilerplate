import React, { createContext, useState } from 'react'
import IMessage from '../interfaces/IMessage'

export const Context = createContext({})

type Props = {
  children: React.ReactNode
}

export const Provider = ({
  children,
}: Props): JSX.Element => {
  const [answer, setAnswer] = useState<null | IMessage>(
    null
  )

  const answerContext = { answer, setAnswer }

  return (
    <Context.Provider value={answerContext}>
      {children}
    </Context.Provider>
  )
}
