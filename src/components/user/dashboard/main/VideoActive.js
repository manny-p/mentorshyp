/** @jsx jsx */
import {jsx} from 'theme-ui'
import Iframe from 'react-iframe'
import {useContext} from 'react'
import {Context} from '../../../../../store'


export default function VideoActive() {

  const {call} = useContext(Context)

  return (
      <div>
        <Iframe
            // id='remote'
            url="/room/calling"
            display={call ? 'block' : 'none'}
            sx={{
              height: '50vh',
              width: '80vw',
              position: 'absolute',
              borderStyle: 'none',
              outline: 'none,'
              // zIndex: '10',
            }}
        >
        </Iframe>
      </div>
  )
}
