/** @jsx jsx */
import {jsx} from 'theme-ui'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// noinspection ES6CheckImport
import {faVideo, faPlusCircle} from '@fortawesome/pro-duotone-svg-icons'
import {Flex} from '@theme-ui/components'
import {useContext} from 'react'
import {Context} from '../../../../../store'

export default function Controls() {
  const {call, setCall} = useContext(Context)

  return (
      <div sx={{variant: 'components.sidebar.controls'}}>
        <Flex sx={{variant: 'components.sidebar.controls.plusSign'}}>
          <FontAwesomeIcon
              icon={faPlusCircle}
              sx={{variant: 'components.sidebar.controls.plusSign.logo'}}
              onClick={() => {
                setCall((v) => !call)
                console.log(`yooooooooo ${call}`)
              }}
          />
        </Flex>
        <Flex sx={{variant: 'components.sidebar.controls.preferences'}}>

          <FontAwesomeIcon icon={faVideo} sx={{variant: 'components.sidebar.controls.logo.video'}}
          />
        </Flex>
      </div>

  )
}




