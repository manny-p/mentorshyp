/** @jsx jsx */
import {jsx} from 'theme-ui'
import Iframe from 'react-iframe'
import {useContext} from 'react'
import {Context} from '../../../../../store'

export default function VideoActive() {

  const {call} = useContext(Context)

  return (
      <Iframe
          url="/room/calling"
          display={call ? 'block' : 'none'}
          sx={{
            height: '50vh',
            width: '100vw',
            position: 'absolute',
            // zIndex: '10',
          }}
      >
      </Iframe>
  )
}
