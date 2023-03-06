import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-elastic-carousel';

const Carousels = ({items}) => {

      const breakPoints=[
        {width:"1",itemsToShow:1},
        {width:"420",itemsToShow:2},
        {width:"768",itemsToShow:3},
        {width:"1200",itemsToShow:4}
      ]

  return (
       <Carousel breakPoints={breakPoints}>
        {items.map((e,i) => 
        <Box 
        key={i} 
        mb="1%" 
        textAlign="center"
        line-spacing="0.05em"
        fontFamily="Montserrat">
          {/* <Box bg="green" h="22px" w="33px" 
            position={"absolute"} zIndex="10" borderRadius={"5px"}
             left="240px"></Box> */}
            <Image src={e.img} h="218px"
             w="207.12px" mb="2%" position={"relative"}>
              
            </Image>
            
            <Text mb="2%" mt="2%" 
            color={"#AAAAAA"}
              fontWeight={"400"}
             lineHeight="12.19px" 
             fontSize="14px">{e.category}</Text>
             <Text mb="2%"  color="#282828"
             fontWeight={"400"}
             lineHeight="17px" 
             fontSize="16px">{e.title}</Text>
             <Text mb="1%" fontWeight={"700"}
             lineHeight="18px"  color="#282828"
             fontSize="18px">{e.price}</Text>
             <Text mb="2%">
                {e.star}
             </Text>
             <Button fontSize={12} fontWeight={"bold"} border="2px solid #282828" mt="2%" borderRadius={"2px"}>{e.btnText}</Button>
            </Box>)}
      </Carousel>
  )
}

export default Carousels