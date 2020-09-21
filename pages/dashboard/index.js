/** @jsx jsx */
import {jsx} from 'theme-ui'
import Nav from '../../src/components/shared/Nav'
import Video from '../../src/components/user/dashboard/main/Video'
import Channels from '../../src/components/user/dashboard/sidebar/Channels'
import Controls from '../../src/components/user/dashboard/sidebar/Controls'
import {Context} from '../../store'
import {useContext} from 'react'
// import Iframe from 'react-iframe'

export default function DashboardPage() {

  const {call} = useContext(Context)

  return (
      <div>
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
            <Video/>
          </main>

            {/*<div*/}
            {/*    sx={{*/}
            {/*      variant: 'components.main.inactive.videoContainer',*/}
            {/*    }}*/}
            {/*>*/}
              {/*<Iframe*/}
              {/*    url="/room/calling"*/}
              {/*    display={call ? 'block' : 'none'}*/}
              {/*    sx={{*/}
              {/*      height: '50vh',*/}
              {/*      width: '100vw',*/}
              {/*      position: 'fixed',*/}
              {/*      zIndex: '10',*/}
              {/*    }}*/}
              {/*>*/}
              {/*</Iframe>*/}
            {/*</div>*/}

        </div>
      </div>
  )
}
