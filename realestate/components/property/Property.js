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
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap="wrap" w="420px" p="5px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt='house' width={500} height={500} />
      </Box>
      <h2>Title: {title}</h2>
      <h4>Rooms: {rooms}</h4>
      <h4>Baths: {baths}</h4>
      <h5>Area: {area}</h5>
      <h5>IsVerified: {isVerified}</h5>
      <h5>Agency: {agency.name}</h5>
      <h6>Rent Frequency: {rentFrequency}</h6>
      <br />
      <p>Price: ${millify(price)}</p>
    </Flex>
  </Link>
)


export default Property