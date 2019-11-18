import React, { createContext } from 'react'
import IMessage from '../interfaces/IMessage'

// hmm, todo: if I need context,
// see this:
// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858

const context = createContext<IMessage | null>(null)

export const AnswerContextProvider = context.Provider

export const AnswerContextConsumer = context.Consumer
