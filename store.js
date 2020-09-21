import React, {createContext, useRef, useState} from 'react'

export const Context = createContext(null)

export default function GlobalStateProvider({children}) {

  const [call, setCall] = useState(false)

  const initialState = {
    call,
    setCall,
  }

  return <Context.Provider value={initialState}>{children}</Context.Provider>
}
