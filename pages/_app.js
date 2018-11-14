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
    
    await nookies.set(ctx, 'token 2', '7890')
    let cookies = await nookies.get(ctx)
    console.log(cookies)
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