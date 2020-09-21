/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import Search from './Search'
import {Button, Flex} from '@theme-ui/components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/pro-duotone-svg-icons'

export default function Nav() {
  return (
      <nav sx={{variant: 'components.nav'}}>
        <Flex>
          <Link href={'/'}>
            <a sx={{
              ml: 2,
            }}><span sx={{color: 'modes.dark.primary'}}>Mentorshyp</span></a>
          </Link>
          <FontAwesomeIcon
              icon={faRocket}
              sx={{
                color: 'modes.dark.text',
              }}
          >
          </FontAwesomeIcon>
        </Flex>


        <Link href={'/dashboard'}>
          <a>Dashboard</a>
        </Link>

        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>

        <Search/>

        <Button sx={{
          variant: 'components.search.button',
          bg: 'modes.dark.highlight',
          borderRadius: '.25rem',
          color: 'modes.dark.text',
          textShadow: '.5px .5px 1px black',
        }}>

          <Link href={'/dashboard'}>
            Log In
          </Link>

        </Button>
      </nav>
  )
}




