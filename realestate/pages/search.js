import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchFilters from '../components/searchfilters/SearchFilters'
import Property from '../components/property/Property'
import noresult from '../assets/noresult.jpg'

const Search = () => {
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
        {[].map((property) => <Property key={property.id} property={property} />)}
      </Flex>
      {[].length === 0 && (
        <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
          <Image src={noresult} alt='No Result' />
        </Flex>
      )}
    </Box>
  )
}

export default Search