/** @jsx jsx */
import {jsx} from 'theme-ui'
import Link from 'next/link'
import Search from './Search'
import {Button} from '@theme-ui/components'

export default function Nav() {
  return (
      <nav sx={{variant: 'components.nav'}}>
        <Link href={"/"}>
          <a sx={{ml: 2}}>Home</a>
        </Link>

        <Link href={"/dashboard"}>
          <a>Dashboard</a>
        </Link>

        <Link href={'/blog'}>
          <a>Blog</a>
        </Link>

        <Search/>

        <Link href={"/room/9a80cabe-45f6-4b8f-bd2e-49cc61f2bee9"}>
          Chat
        </Link>

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




