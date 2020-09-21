import React, {createContext, useState} from 'react'

export const Context = createContext(null)

export default function GlobalStateProvider({children}) {

  const [call, setCall] = useState(false)
  const [audio, setAudio] = useState(false)
  const [guest, setGuest] = useState(false)

  const initialState = {
    call,
    setCall,
    audio,
    setAudio,
    guest,
    setGuest,
  }

  return <Context.Provider value={initialState}>{children}</Context.Provider>
}
