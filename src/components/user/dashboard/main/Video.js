/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Grid} from '@theme-ui/components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/pro-duotone-svg-icons'
import {useContext} from 'react'
import {Context} from '../../../../../store'

export default function Video() {
  const {call, setCall} = useContext(Context)


  return (
      <>
        <Grid
            gap={0}
            columns={['3fr 1fr']}
            sx={{
              // bg:'modes.dark.secondary',
              border: '.1rem solid black',
            }}
            style={{display: call ? 'none' : 'grid'}}
        >
          {/*Guest Caller*/}
          <section sx={{
            gridColumnStart: '1',
            gridColumnEnd: '2',
            bg: 'modes.dark.secondary',
          }}>
            <div sx={{
              variant: 'components.main.inactive.videoContainer',
            }}>
              <h1>Guest</h1>
              <FontAwesomeIcon icon={faUser} sx={{variant: 'components.main.inactive.avatar.logo'}}/>
            </div>
          </section>

          <section sx={{
            gridColumnStart: '2',
            gridColumnEnd: '3',

          }}>
            <div
                sx={{
                  variant: 'components.main.inactive.videoContainer',
                  bg: 'modes.dark.primary',

                }}>
              <h1>You</h1>
              <FontAwesomeIcon icon={faUser} sx={{variant: 'components.main.inactive.avatar.logo'}}/>
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


