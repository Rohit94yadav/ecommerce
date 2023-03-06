import { Box, Button, Divider, Heading, HStack, Image, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img1 from "../Images/image 46.png";
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import {Icon} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
    <Box w="100%" bg="#F4F4F4" pt="3%" mt="3%">
        <Heading textAlign={'center'} 
        fontSize={"18px"}
        lineHeight="22px"
        fontWeight={"700"}
        fontFamily="Montserrat"
        color={"#383838"}
        >Get Special Offers and Saving</Heading>
         <Text textAlign={'center'} 
        fontSize={"18px"}
        lineHeight="22px"
        fontWeight={"500"}
        fontFamily="Montserrat"
        color={"#383838"}>Get all the informations on Events, Sales and Offers</Text>
         <HStack m="auto" w={["80%","75%","60%","50%"]} h="33px" mt="3%">
         <Input _placeholder={{fontFamily:"Montserrat",fontStyle:"italic",color:"#282828"}} variant='unstyled' borderRadius={"0px"} 
         borderBottom="2px" placeholder="Enter your Email Address here..."></Input>
         <Button borderRadius={"2px"} h="100%" bg="blue.700" color="white">SEND </Button>
         </HStack>
    </Box>

     <Box color={'whiteAlpha.700'} p="3%" pt={["17%","15%","10%","7%"]}
     background={"linear-gradient(180deg, #F4F4F4 0%, rgba(34, 88, 134, 0.674194) 27.6%, #225886 100%)"}>
            <SimpleGrid columns={[1,2,3,3]} textAlign={['center','center','start','start']}>
                <VStack m="2%" 
                 alignItems={['center','center','start','start']} pl="2%" justifyContent={"space-evenly"}>
                    <Image src={img1} w="82px" h="50px" color="whiteAlpha.700" ></Image>
                    <Text 
                    fontFamily={"Montserrat"}
                    fontWeight="600px"
                     fontSize="14px" 
                     lineHeight={"14px"}
                     color="#B1CCDF"
                     textAlign={['center','center','start','start']} w="100%">Call Now</Text>
                    <Heading 
                    fontFamily={"Montserrat"}
                    fontWeight="700px"
                     fontSize={["22px","25px","30px","36px"]} 
                     lineHeight={"24.38px"}
                     textAlign={['center','center','start','start']}
                     color="#FFFFFF">+91 123456789</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore. </Text>
                </VStack>
                <VStack m="2%"
                alignItems={['center','center','start','start']} pl="2%" justifyContent={"start"}>
                    <Text fontFamily={"Montserrat"}
                    fontWeight="600px"
                     fontSize="14px" 
                     lineHeight={"14px"}
                     color="#B1CCDF"
                      textAlign={['center','center','start','start']} w="100%">Our Address</Text>
                    <Heading  fontFamily={"Montserrat"}
                    fontWeight="700px"
                     fontSize={["22px","25px","30px","30px"]} 
                     lineHeight={"24.38px"}
                     color="#FFFFFF"
                     textAlign={['center','center','start','start']}
                     >UNITED KINGDOM</Heading>
                    <Text fontFamily={"Montserrat"}
                    fontWeight="400px"
                     fontSize="15px" 
                     lineHeight={"18.29px"}
                     color="#B1CCDF">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.</Text>
                    <Text fontFamily={"Montserrat"}
                    fontWeight="700px"
                     fontSize="13px"
                     lineHeight={"24.38px"}
                     textAlign={['center','center','start','start']}
                     color="#FFFFFF"
                       >info@loremipsum.com</Text>
                </VStack>
                <VStack m="2%" alignItems={['center','center','start','start']}>
                    <Text fontFamily={"Montserrat"}
                    fontWeight="600px"
                     fontSize="14px" 
                     lineHeight={"14px"}
                     color="#B1CCDF"
                      textAlign={['center','center','start','start']} w="100%">FOLLOW US</Text>
                    <Text fontFamily={"Montserrat"}
                    fontWeight="400px"
                     fontSize="15px" 
                     lineHeight={"18.29px"}
                     color="#B1CCDF">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.</Text>
                    <HStack w="100%" color={'#FFFFFF'} justifyContent={['center','center','start','start']}>
                        <Icon as={AiOutlineFacebook} boxSize="40px"></Icon>
                        <Icon as={AiFillTwitterSquare} boxSize="40px"></Icon>
                        <Icon as={AiOutlineInstagram} boxSize="40px"></Icon>
                    </HStack>
                </VStack>
            </SimpleGrid>
            <Divider orientation='horizantal'
            color="white" mt="2%" mb="2%" border="1px solid white" ></Divider>
            <Text> © 2023 All Rights Reserved</Text>
     </Box>
    </>
  )
}

export default Footer