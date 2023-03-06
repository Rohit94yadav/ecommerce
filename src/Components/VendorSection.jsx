import React from 'react';
import IND from "../Images/IND.png"
import USA from "../Images/USA.png"
import UK from "../Images/UK.png"
import CHN from "../Images/CHN.png"
import AUS from "../Images/AUS.png"
import { Box, 
   Heading, 
   Text,
   Image, 
   SimpleGrid, 
   VStack, 
 } from '@chakra-ui/react'
   

const VendorSection = () => {

  let vendors=[
    {src:IND,name:"IND"},
    {src:USA,name:"USA"},
    {src:UK,name:"UK"},
    {src:AUS,name:"AUS"},
    {src:CHN,name:"CHINA"},
];

  return (
    <>
       <VStack w="80%" m="auto" mb="2%" textAlign={"start"} alignItems="start" justifyContent="start">
            <Text mt="5%"
            fontSize={"15px"} 
            textTransform="uppercase"
            fontFamily={"Montserrat"}
            color={"#282828"} 
            letterSpacing="0.05em" 
            lineHeight={"38px"}
            fontWeight="500" 
            textAlign={"center"}
            >Lorem, ipsum dolor.</Text>
            <Heading
            fontFamily={"Montserrat"} 
            fontSize={["20px","22px","25px","30px"]} 
            textTransform="uppercase"
            color={"#225886"} 
            lineHeight={"37px"}
            fontWeight="800" 
            textAlign={"start"} 
            letterSpacing="0.05em" 
            >VENDORS SECTION</Heading>
        </VStack>
        <SimpleGrid columns={[2,2,3,5]} w="80%" m="auto" 
            alignItems={"center"}  justifyContent={"center"} >
            {vendors?.map((e,i)=>
                <Box key={i} m="2%" 
                 >
                    <Image src={e.src} w="100%" h="100%"></Image>
                    <Heading 
                    position={"relative"} 
                    top={["-111px","-144px","-144px","-144px"]} 
                    fontFamily="bold" color="whiteAlpha.900" fontSize={44}>{e.name}</Heading>
                </Box>
            )}
        </SimpleGrid>
    </>
  )
}

export default VendorSection