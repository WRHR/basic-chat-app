import { createContext, useReducer } from 'react'
import io from 'socket.io-client'

export const CTX = createContext()

let initState = {
  general: [
    {from: 'aaron', msg: 'hello'},
    {from: 'bob', msg: 'hi'},
    {from: 'aaron', msg: 'howdy'},
    {from: 'matt', msg: 'sa du'},
  ],
  topic2: [
    {from: 'mac', msg: 'hello'},
    {from: 'sally', msg: 'wow'},
    {from: 'martin', msg: 'oops'},
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

function sendChatAction(value) {
  socket.emit('chat message', value)
}

let socket


export default function Store(props) {
  const [allChats, dispatch] = useReducer(reducer, initState)

  if(!socket){
    socket = io(':3001')
    socket.on('chat message', 
      (msg) => dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
    )
  }

  const user = 'billy' + Math.random(100).toFixed(2)


  return (
    <CTX.Provider value={{allChats, sendChatAction, user}}>
        {props.children}
    </CTX.Provider>
  )
}