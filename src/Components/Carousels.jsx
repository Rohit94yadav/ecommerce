import { Button, Image, Text } from '@chakra-ui/react';
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
        {items.map((e,i) => <div key={i} mb="1%">
            <Image src={e.img} mb="1%"></Image>
            <Text mb="1%" color={"#ccc"} fontSize={12}>{e.category}</Text>
             <Text mb="1%">{e.title}</Text>
             <Text mb="1%" fontWeight={"bold"}>{e.price}</Text>
             <Text mb="2%">
                {e.star}
             </Text>
             <Button fontSize={14} fontWeight={"bold"} border="2px solid" mt="2%" borderRadius={"2px"}>{e.btnText}</Button>
            </div>)}
      </Carousel>
  )
}

export default Carousels