import React from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'

const NavBar = () => {
  return (
    <header>
      <div>Real Estate App</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Properties</Link>
          </li>
          <li>
            <Link href='/newmeetup'>Property Data</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar