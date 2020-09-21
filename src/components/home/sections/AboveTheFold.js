/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Box, Button, Flex, Grid} from '@theme-ui/components'
import ValueProp from './ValueProp'

export default function AboveTheFold() {
  return (
      <>
        <Grid
            gap={0}
            // columns={[2, '1fr 2fr']}>
            columns={'1fr'}>
          <div>
            <Box sx={{m: 0, bg: 'background', height: '80vh'}}>
              <Flex sx={{justifyContent: 'center'}}>
                <h1 sx={{mt: 5}}>Re-thinking </h1>
              </Flex>
              <Flex sx={{justifyContent: 'center'}}>
                <h1 sx={{mt: -1}}>Virtual Learning, <i>Together</i></h1>
              </Flex>
            </Box>
          </div>
        </Grid>
      </>
  )
}
