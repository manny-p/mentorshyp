/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Box, Flex, Grid} from '@theme-ui/components'

export default function ValueProp() {
  return (
      <>
        <Grid
            gap={0}
            // columns={[2, '1fr 2fr']}>
            columns={'1fr'}
            sx={{height: '10vh', mt:'3rem'}}
        >
        <Box sx={{bg: 'highlight', height: '20vh', color: 'background'}}>
          {/*<Flex sx={{flexDirection: 'column'}}>*/}
          <Flex sx={{justifyContent: 'center'}}>
            {/*<h2 sx={{color: 'text'}}>Flatten the Learning Curve with Mentorshyp</h2>*/}
          </Flex>
          <Flex sx={{justifyContent: 'center'}}>
            <h3 sx={{mt: -3, color: 'text'}}/>
          </Flex>
          {/*<Flex sx={{mt: -3, justifyContent: 'space-around', textShadow: '.5px .5px 1px black',}}>*/}
          {/*  <h3>Value Prop 1</h3>*/}
          {/*  <h3>Value Prop 2</h3>*/}
          {/*  <h3>Value Prop 3</h3>*/}
          {/*</Flex>*/}
        </Box>
        </Grid>
      </>
  )
}

