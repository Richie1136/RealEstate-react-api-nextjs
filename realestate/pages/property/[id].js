import Head from 'next/head'
import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"
import { FetchApi, baseURL } from '../../utils/fetchapi'

const PropertyDetails = ({ propertyDetails: { price, rooms, baths, title, rentFrequency, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  <>
    <Box maxWidth="1000px" margin='auto' p='4'>
      <h2>Price:{price}</h2>
      {rooms}
    </Box>
  </>
)

export default PropertyDetails


export async function getServerSideProps({ params: { id } }) {

  // Getting the query through the URL

  // Use getServerSideProps to fetch data on each request


  const data = await FetchApi(`${baseURL}/properties/detail?externalID=${id}`)


  return {
    props: {
      propertyDetails: data,
    }
  }
}
