/** @jsx jsx */
import {jsx} from 'theme-ui'
import Nav from '../../src/components/shared/Nav'
import Channels from '../../src/components/user/dashboard/sidebar/Channels'
import Controls from '../../src/components/user/dashboard/sidebar/Controls'
import {Context} from '../../store'
import {useContext} from 'react'
import VideoInactive from '../../src/components/user/dashboard/main/VideoInactive'
import VideoActive from '../../src/components/user/dashboard/main/VideoActive'
import Inactive from '../../src/components/user/dashboard/main/event/Inactive'

export default function DashboardPage() {

  const {call} = useContext(Context)

  // const videoStatus = () => {
  //   if (call) return <VideoActive/>
  //   if (!call) return <VideoInactive/>
  // }

  return (
      <div
          sx={{
            borderStyle: 'none',
            outline: 'none'
          }}
      >
        <div sx={{variant: 'layout.container'}}>
          <header sx={{variant: 'layout.nav'}}>
            <Nav/>
          </header>
          <aside sx={{variant: 'layout.sidebar'}}>
            <div sx={{variant: 'components.sidebar'}}>
              <Channels/>
              <Controls/>
            </div>
          </aside>
          <main sx={{variant: 'layout.video'}}>
            {/*inactive video state*/}
            {/*<div>*/}
            {/*{videoStatus}*/}
            {/*</div>*/}
            <Inactive
                // sx={{
                //   height: '50vh',
                //   width: '80vw',
                //   position: 'fixed',
                //   zIndex: 10,
                //   top:0,
                //   left: 0
                // }}
            />
            <VideoActive/>
            <VideoInactive/>


          </main>

          {/*<div*/}
          {/*    sx={{*/}
          {/*      variant: 'components.main.inactive.videoContainer',*/}
          {/*    }}*/}
          {/*>*/}

          {/*</div>*/}

        </div>
      </div>
  )
}

