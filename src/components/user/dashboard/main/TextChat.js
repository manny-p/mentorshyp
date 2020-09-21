/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Flex, Textarea} from '@theme-ui/components'

export default function TextChat() {

  return (
      <div sx={{
        bg: 'modes.dark.background',
        height: '44.8vh',
        mt: '-.1rem',
        color: 'modes.dark.text',
      }}>
        <Flex sx={{bg:'rgba(0,0,0)', position: 'fixed', bottom: 0, width: '80vw', flexDirection: 'column'}}>
          <h1 sx={{ml:1, color: 'modes.dark.text'}}>#Chat</h1>
          <Textarea
              defaultValue='Hello'
              rows={14}
          />
        </Flex>
      </div>
  )
}
