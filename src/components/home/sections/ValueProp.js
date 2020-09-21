/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

export default function ValueProp() {
  return (
      <>
        <Box sx={{bg: 'highlight', height: '20vh', color: 'background'}}>
          {/*<Flex sx={{flexDirection: 'column'}}>*/}
          <Flex sx={{justifyContent: 'center'}}>
            <h2 sx={{color: 'text'}}>Flatten the Learning Curve</h2>
          </Flex>
          <Flex sx={{justifyContent: 'center'}}>
            <h3 sx={{mt: -3, color: 'text'}}>w/Mentorshyp</h3>
          </Flex>
          <Flex sx={{mt: -3, justifyContent: 'space-around', textShadow: '.5px .5px 1px black',}}>
            <h3>Value Prop 1</h3>
            <h3>Value Prop 2</h3>
            <h3>Value Prop 3</h3>
          </Flex>
        </Box>
      </>
  )
}

