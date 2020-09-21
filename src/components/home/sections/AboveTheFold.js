/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Button, Flex, Grid} from '@theme-ui/components'
import LogoA from '../../../assets/LogoA.svg'
import Link from 'next/link'


export default function AboveTheFold() {
  return (
      <>
        <Grid
            gap={0}
            // columns={[2, '1fr 2fr']}>
            columns={'1fr'}
            sx={{height: '80vh'}}
        >
          <Flex sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            mt: '2rem'
          }}>
            <Flex
                sx={{
                  zIndex: 2,
                  mt: '-18rem',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
            >
              <h1 sx={{mt: 5}}>Re-thinking </h1>
              <div style={{zIndex: 1}}>
                <h1>Virtual Learning, <i>Together</i></h1>
              </div>
            </Flex>
            <div sx={{zIndex: -1, opacity: '100%', mt: '-15rem'}}>

              <LogoA/>

            </div>
            <div sx={{zIndex: 1, mt: '-20rem'}}>
              <Button sx={{
                variant: 'components.button',

              }}>
                <Link href={'/dashboard'}>
                  🚀Ship it!
                </Link>

              </Button>
            </div>

          </Flex>
        </Grid>
      </>
  )
}

// <Flex
//     sx={{
//       justifyContent: 'center',
//       flexDirection: 'column'
//     }}
// >
//   <Flex
//       sx={{
//         mt: -1,
//         justifyContent: 'center',
//         flexDirection: 'column'
//       }}
//   >
//     {/*<h1>Virtual Learning, <i>Together</i></h1>*/}
//
//   </Flex>
//   <Flex
//       sx={{
//         justifyContent: 'center',
//         flexDirection: 'column'
//       }}
//   >
//
//     {/*<LogoA/>*/}
//
//   </Flex>
//
// </Flex>
