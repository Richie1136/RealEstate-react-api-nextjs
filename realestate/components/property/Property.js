import Link from "next/link"
import Image from "next/image"
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"

const Property = ({ property }) => {
  console.log(property)
  return (
    <>
      <div>
        <h2>Title: {property.title}</h2>
        <br />
        <p>Price: ${millify(property.price)}</p>
        <img src={property.coverPhoto.url} alt='home img' />
      </div>
    </>
  )
}

export default Property