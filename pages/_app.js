/** @jsx jsx */
import {jsx} from 'theme-ui'
// noinspection ES6CheckImport
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'
import GlobalStateProvider from '../store'

export default function MyApp({Component, pageProps}) {
  return (
      <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </GlobalStateProvider>
  )
}

// useEffect(() => {
//
//       const createMsg =
//           async () => {
//             await firebase.firestore().collection('test').add({
//               channel: 'channel2',
//               msg: 'msg2'
//             })
//           }
//       createMsg().then(results => results)
//     }, []
// )
