import React from 'react'
import Footer from '../footer/Footer.js'
import NavBar from '../navbar/NavBar.js'
import Head from 'next/head.js'
import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <NavBar />
        </header>
        <main>
          {children}
        </main>
      </Box>
      <Footer />
    </>
  )
}

export default Layout