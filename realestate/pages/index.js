import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseURL, FetchApi } from '../utils/fetchapi'
import Property from '../components/property/Property'


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => (
  // M stands for margin
  // P stands for Padding
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="Banner pic" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3px" paddingBottom="3px" fontWeight="medium">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

const Home = ({ propertiesForSale, propertiesForRent }) => {

  return (
    <Box>
      <Banner purpose="Rent a Home" title1="Rental Homes for" title2="Everyone" desc1="Explore Homes and Apartments"
        desc2="and more" buttonText="Explore Renting" linkName="/search?purpose=for-rent" imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {/* Fetch properties and map over them */}
        {propertiesForRent.map((property) => {
          return <Property key={property.id} property={property} />
        })}
      </Flex>
      <Banner purpose="Buy a Home" title1="Find, Buy and Own Your" title2="Dream Home" desc1="Explore Homes and Apartments"
        desc2="and more" buttonText="Explore Buying" linkName="/search?purpose=for-sale" imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      {/* Fetch properties and map over them */}
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => {
          return <Property key={property.id} property={property} />
        })}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  // getStaticProps ensures that your pre-rendered pages contain data that 
  // you might need to wait for
  // fetch data from an API

  // From the API
  //   const axios = require("axios");

  // const options = {
  //   method: 'GET',
  //   url: 'https://bayut.p.rapidapi.com/properties/list',
  //   params: {
  //     locationExternalIDs: '5002,6020',
  //     purpose: 'for-rent',
  //     hitsPerPage: '25',
  //     page: '0',
  //     lang: 'en',
  //     sort: 'city-level-score',
  //     rentFrequency: 'monthly',
  //     categoryExternalID: '4'
  //   },

  const propertyForSale = await FetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await FetchApi(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits
    }
  }
}

export default Home