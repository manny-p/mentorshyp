/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Flex, Grid} from '@theme-ui/components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/pro-duotone-svg-icons'

export default function Video() {
  return (
      <>
        <Grid
            gap={0}
            columns={['3fr 1fr']}
            sx={{
              // bg:'modes.dark.secondary',
              border: '.1rem solid black',
            }}
        >
          <section sx={{
            gridColumnStart: '1',
            gridColumnEnd: '2',
            bg: 'modes.dark.secondary',
          }}>
            <div sx={{
              variant: 'components.main.inactive.video',
            }}>
              <h1>User 1</h1>
              <FontAwesomeIcon icon={faUser} sx={{variant: 'components.main.inactive.logo'}}/>
            </div>
          </section>

          <section sx={{
            gridColumnStart: '2',
            gridColumnEnd: '3',

          }}>
            <div
                sx={{
                  variant: 'components.main.inactive.video',
                  bg: 'modes.dark.primary',

                }}>
              <h1>User 2</h1>
              <FontAwesomeIcon icon={faUser} sx={{variant: 'components.main.inactive.logo'}}/>
            </div>
          </section>
        </Grid>
      </>
  )
}

// <>
//   <div sx={{variant: 'layout.container'}}>
//     <header sx={{variant: 'layout.nav'}}>
//       <Nav/>
//     </header>
//     <aside sx={{variant: 'layout.sidebar'}}>
//       <div sx={{variant: 'components.sidebar'}}>
//         <Channels/>
//         <Controls/>
//       </div>
//     </aside>
//     <main sx={{variant: 'layout.video'}}>
//       <Grid
//           columns={[2, '3fr 1fr']}
//           sx={{
//             bg:'red',
//           }}
//       >
//         <main sx={{variant: 'components.main.video'}}>
//           <video ref={localRef} muted width="600"/>
//           <video ref={remoteRef} width="600"/>
//         </main>
//       </Grid>
//     </main>
//   </div>
// </>


