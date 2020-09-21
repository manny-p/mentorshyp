import React, {createContext, useRef, useState} from 'react'

export const Context = createContext(null)

export default function GlobalStateProvider({children}) {

  const [call, setCall] = useState(false)
  const [guest, setGuest] = useState(false)

  const initialState = {
    call,
    setCall,
    guest,
    setGuest
  }

  return <Context.Provider value={initialState}>{children}</Context.Provider>
}
