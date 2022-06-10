import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, imageUrl, linkName }) => (
  // M stands for margin
  // P stands for Padding
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {purpose}
    <Image src={imageUrl} width={500} height={300} alt="Banner pic" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3px" paddingBottom="3px" fontWeight="medium">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Banner purpose="Rent a Home" title1="Rental Homes for" title2="Everyone" desc1="Explore Homes and Apartments"
        desc2="and more" buttonText="Explore Renting" linkName="/search?purpose=for-rent" imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner purpose={'For Rent'} />
    </div>
  )
}

export default Home