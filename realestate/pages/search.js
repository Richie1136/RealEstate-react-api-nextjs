import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/searchfilters/SearchFilters'
import Property from '../components/property/Property'
import noresult from '../assets/noresult.jpg'
import { baseURL, FetchApi } from '../utils/fetchapi'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false)

  const handleClick = () => {
    setSearchFilters(prevFilter => !prevFilter)
  }

  const router = useRouter()
  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="large"
        justifyContent="center"
        alignItems="center"
        onClick={handleClick}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" padding='4' fontWeight='bold'>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => <Property key={property.id} property={property} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
          <Image src={noresult} alt='No Result' />
        </Flex>
      )}
    </Box>
  )
}

export default Search





export async function getServerSideProps({ query }) {

  // Getting the query through the URL

  // Use getServerSideProps to fetch data on each request

  const purpose = query.purpose || 'for-sale'
  const rentFrequency = query.rentFrequency || 'monthly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '100000000'
  const roomsMin = query.minRooms || '0'
  const bathsMin = query.minBaths || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5001'
  const categoryExternalID = query.categoryExternalID || '4'

  const data = await FetchApi(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)


  return {
    props: {
      properties: data?.hits,
    }
  }
}