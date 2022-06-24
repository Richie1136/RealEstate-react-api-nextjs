import { useState, useEffect } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../../utils/filterData'
import noresult from '../../assets/noresult.jpg'
import { FetchApi, baseURL } from '../../utils/fetchapi'



const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const [location, setLocation] = useState(false)
  const [locationData, setLocationData] = useState()
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  console.log(filterData)


  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.map((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query })
  }

  const handleChange = (e) => {
    setLocation(!location)
  }

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch('')
  }

  const handleSearchChange = () => {
    searchProperties({ locationExternalIDs: location.externalID })
    setLocation(false)
    setSearch(location.name)
  }

  useEffect(() => {
    if (search !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await FetchApi(`${baseURL}/auto-complete?query=${search}`);
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [search]);

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex flexDir='column'>
        <Button onClick={handleChange} border='1px' borderColor='gray.200' marginTop='2' >
          Search Location
        </Button>
        {location && (
          <Flex flexDir='column' pos='relative' paddingTop='2'>
            <Input
              placeholder='Type Here'
              value={search}
              w='300px'
              focusBorderColor='gray.300'
              onChange={handleInput}
            />
            {search !== '' && (
              <Icon
                as={MdCancel}
                pos='absolute'
                cursor='pointer'
                right='5'
                top='5'
                zIndex='100'
                onClick={handleSearch}
              />
            )}
            {loading && <Spinner margin='auto' marginTop='3' />}
            {location && (
              <Box height='300px' overflow='auto'>
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={handleSearchChange}
                  >
                    <Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                    <Image src={noresult} alt='No Results' />
                    <Text fontSize='xl' marginTop='3'>
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default SearchFilters