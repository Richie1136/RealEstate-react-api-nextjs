import Link from "next/link"
import Image from "next/image"
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"

let defaultImage = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  // p stands for padding, w stands for width
  < Link href={`/property/${externalID}`} passHref >
    <Flex flexWrap="wrap" w="420px" p="5px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt='house' width={500} height={500} />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2px' alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight='3px' color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              USD ${millify(price * 0.27)}{rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box >
            <Avatar size='sm' src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          Rooms: {rooms}<FaBed /> | Baths: {baths}<FaBath /> | {millify(area)} sqft <BsGridFill />

        </Flex>
      </Box>
      <h2>Title: {title}</h2>
      <h5>Area: {area}</h5>
      <h5>Agency: {agency.name}</h5>
      <br />
    </Flex>
  </Link >
)


export default Property