import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/SiteLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    )
  }
}

export default MyApp
