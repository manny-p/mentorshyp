/** @jsx jsx */
import {jsx} from 'theme-ui'
import Iframe from 'react-iframe'

export default function Frame() {
  return (
      <>
        <Iframe
            url='/room/9a80cabe-45f6-4b8f-bd2e-49cc61f2bee9'
            width="450px"
            height="450px"
            display="initial"
            position="relative"
        />
      </>
  )
}


