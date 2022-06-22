import Head from 'next/head'
import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify"
import { FetchApi, baseURL } from '../../utils/fetchapi'
import ImageScrollbar from '../../components/imagescrollbar/ImageScrollbar'

const PropertyDetails = ({ propertyDetails: { price, rooms, baths, title, rentFrequency, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  <>
    <Box maxWidth="1000px" margin='auto' p='4'>
      <h2>Price: USD ${millify(price * 0.27)}</h2>
      {photos && <ImageScrollbar data={photos} />}
      <Box w='full' p="6">
        <Flex paddingTop='2' alignItems='center'>
          <Box paddingRight='3' color='green.400'>
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight='bold' fontSize='lg'>
            Price: USD ${millify(price * 0.27)}
          </Text>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms}<FaBed /> |  {baths}<FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box marginTop='2'>
          <Text fontSize="lg" marginBottom='2' fontWeight='bold'>
            {title}
          </Text>
          <Text marginBottom='2' color='gray.600'>
            {description}
          </Text>
        </Box>
        <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
          <Flex justifyContent='space-between' w='400px' borderBottom='1' borderColor='gray.200' p='3'>
            <Text>Type</Text>
            <Text fontWeight='bold'>{type}</Text>
          </Flex>
        </Flex>
      </Box>
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
