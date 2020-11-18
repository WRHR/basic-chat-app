import { createContext, useReducer } from 'react'

export const CTX = createContext()

const initState = {
  general: [
    {from: 'aaron', msg: 'hello'},
    {from: 'bob', msg: 'hi'},
    {from: 'aaron', msg: 'howdy'},
    {from: 'matt', msg: 'sa du'},
  ],
  topic2: [
    {from: 'aaron', msg: 'hello'},
    {from: 'bob', msg: 'hi'},
    {from: 'aaron', msg: 'howdy'},
    {from: 'matt', msg: 'sa du'},
  ],
}

function reducer(state, action) {
  const { from, msg, topic } = action.payload
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
          [topic]: [
            ...state[topic],
            { from, msg }
          ]
      }
    default:
      return state
  }
}

export default function Store(props) {

  const reducerHook = useReducer(reducer, initState)

  return (
    <CTX.Provider value={reducerHook}>
        {props.children}
    </CTX.Provider>
  )
}