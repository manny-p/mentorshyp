/** @jsx jsx */
import {jsx} from 'theme-ui'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/pro-duotone-svg-icons'
import {useContext} from 'react'
import {Context} from '../../../../../../store'
import Iframe from 'react-iframe'

export default function Inactive() {

  const {guest} = useContext(Context)

  return (
      <div
          sx={{
            // display: !!guest
            // display: guest ? 'block' : 'none'
            display: guest ? 'none' : 'block',
            overflow: 'auto'
          }}
      >
        <section
            sx={{
              gridColumnStart: '1',
              gridColumnEnd: '2',
              bg: 'modes.dark.secondary',
              height: '49.8vh',
              width: '60.05vw',
              position: 'fixed',
              zIndex: 10,
              top: 50,
              m: 0,
            }}
        >
          <div
              sx={{
                variant: 'components.main.inactive.videoContainer',
              }}
          >
            <h1>Guest</h1>
            <FontAwesomeIcon
                icon={faUser}
                sx={{variant: 'components.main.inactive.avatar.logo'}}
            />
          </div>
        </section>
      </div>
  )
}
