/** @jsx jsx */
import {jsx} from 'theme-ui'
import HomeLayout from '../src/components/home/HomeLayout'


export default function IndexPage() {
  return (
      <>
        <HomeLayout/>
      </>
  )
}



// /** @jsx jsx */
// import {jsx} from 'theme-ui'
// import Nav from '../src/components/shared/Nav'
// import Video from '../src/components/user/dashboard/main/Video'
// import Channels from '../src/components/user/dashboard/sidebar/Channels'
// import Controls from '../src/components/user/dashboard/sidebar/Controls'
//
// export default function IndexPage() {
//   return (
//       <>
//         <div sx={{variant: 'layout.container'}}>
//           <header sx={{variant: 'layout.nav'}}>
//             <Nav/>
//           </header>
//           <aside sx={{variant: 'layout.sidebar'}}>
//             <div sx={{variant: 'components.sidebar'}}>
//               <Channels/>
//               <Controls/>
//             </div>
//           </aside>
//           <main sx={{variant: 'layout.video'}}>
//             <Video/>
//           </main>
//         </div>
//       </>
//   )
// }
