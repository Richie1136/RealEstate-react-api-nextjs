import '../styles/globals.css'
import { CharkraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
import nProgress from 'nprogress'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
