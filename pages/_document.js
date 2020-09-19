import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static getInitialProps = async ctx => {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
        <Html lang="en">
          <Head>
            <link rel="shortcut icon" href="/public/favicon.ico"/>
            <title>Mentorshyp</title>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    )
  }
}

export default MyDocument
