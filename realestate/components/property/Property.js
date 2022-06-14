import Link from "next/link"
import Image from "next/image"
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref >
    <div>
      <h2>Title: {title}</h2>
      <h4>Rooms: {rooms}</h4>
      <h4>Baths: {baths}</h4>
      <h5>Area: {area}</h5>
      <h5>IsVerified: {isVerified}</h5>
      <h5>Agency: {agency.name}</h5>
      <h6>Rent Frequency: {rentFrequency}</h6>
      <br />
      <p>Price: ${millify(price)}</p>
      <img src={coverPhoto.url} alt='home img' />
    </div>
  </Link>
)


export default Property