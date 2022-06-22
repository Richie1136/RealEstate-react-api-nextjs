import { useContext } from "react"
import Image from "next/image"
import { Box, Flex, Icon } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' m='1'>
      <Icon as={FaArrowAltCircleLeft}
        onClick={scrollPrev}
        fontSize='2xl'
        cursor='pointer'
      />
    </Flex>
  )

}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center'>
      <Icon as={FaArrowAltCircleRight}
        onClick={scrollNext}
        fontSize='2xl'
        cursor='pointer'
      />
    </Flex>
  )
}

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
    {data.map((item) => (
      <Box key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1'>
        <Image placeholder="blur" blurDataURL={item.url} src={item.url} alt='Scroll picture' width='500px' height='500px' sizes="(max-width:500px) 100px" />
      </Box>
    ))}
  </ScrollMenu>
)

export default ImageScrollbar