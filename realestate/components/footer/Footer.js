import { Box, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        2022 Real Estate, Inc.
        <Text marginTop="10px">
          Created by © Richard Hagenah
        </Text>
      </Box>
    </>
  )
}

export default Footer