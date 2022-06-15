import React from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const NavBar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href='/' paddingLeft="2px">Real Estate Application</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton color="red.400" as={IconButton} icon={<FcMenu />} variant="outlined" />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/' passHref>

          </Link>
          <Link href='/' passHref>

          </Link>
          <Link href='/' passHref>

          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default NavBar