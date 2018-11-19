import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layout'
import nookies from 'nookies'

export default class NACOApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Tokens & Cookies
    
    let cookies = await nookies.get(ctx)
    console.log(cookies)

    if ('caspioToken' in cookies) {
      console.log('Hooray!')
    } else {
      
      await nookies.set(ctx, 'caspioToken', '7890')
    }
    pageProps.authenticated = true
    pageProps.loading = false
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    if (pageProps.loading) {
      return (
        <Container>
          <div>Loading</div>
        </Container>
      )
    }

    if (!pageProps.authenticated) {
      return (
        <Container>
            <div>Sign In</div>
        </Container>
      )
    }

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}