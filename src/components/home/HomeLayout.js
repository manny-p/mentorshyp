/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Box, Button, Flex, Grid} from '@theme-ui/components'
import ValueProp from './sections/ValueProp'
import Nav from '../shared/Nav'
import AboveTheFold from './sections/AboveTheFold'
import Frame from './sections/Frame'

export default function IndexPage() {
  return (
      <>
        <Grid>
          <Nav/>
          <AboveTheFold/>
          <ValueProp/>
        </Grid>
      </>
  )
}
