/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Post} from '../../src/components/blog/Post'
import {posts} from '../../src/functions/getAllPosts'
import Nav from '../../src/components/shared/Nav'
import {Layout} from '../../src/components/blog/Layout'

export default function BlogPage() {
  return (
      <div sx={{variant: 'layout.container'}}>
        <Layout pageTitle="Blog" description="Mentorshyp Blog"/>
        <header sx={{variant: 'layout.nav'}}>
          <Nav/>
        </header>
        <aside sx={{variant: 'layout.sidebar'}}>
          <div sx={{variant: 'components.sidebar', bg: 'modes.dark.highlight'}}>
          </div>
        </aside>
        <section sx={{variant: 'layout.main'}}>
          <main sx={{variant: 'components.main', p: 3}}>
            {posts.map((post) => {
              return (
                  //todo add additional elements
                    <Post key={post.link} post={post}/>
              )
            })}
          </main>
        </section>
      </div>
  )
}


