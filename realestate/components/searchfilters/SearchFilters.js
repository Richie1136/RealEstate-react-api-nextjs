import { useState, useEffect } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../../utils/filterData'


const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  console.log(filterData)


  const searchProperties = (filterValues) => {
  }


  const handleChange = (e, queryName) => {
    searchProperties({ [filter.queryName]: e.target.value })
  }

  return (
    <Flex bg='gray.100' p="4" justifyContent="center" flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select p='2' w='fit-content' placeholder={filter.placeholder} onChange={handleChange}>
          </Select>
        </Box>
      ))}
    </Flex >
  )
}

export default SearchFilters