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
    <Box w="100%" bg="#F4F4F4" pt="3%" >
        <Heading  fontSize={22}>Get Special Offers and Saving</Heading>
         <Text fontSize={22}>Get all the informations on Events, Sales and Offers</Text>
         <HStack m="auto" w={["80%","75%","60%","50%"]} h="33px" mt="3%">
         <Input variant='unstyled' borderRadius={"0px"} borderBottom="2px" placeholder="Enter your Email Address here..."></Input>
         <Button borderRadius={"2px"} h="100%" bg="blue.700" color="white">SEND </Button>
         </HStack>
    </Box>

     <Box color={'whiteAlpha.700'} p="3%" pt={["17%","15%","10%","7%"]}
     background={"linear-gradient(180deg, #F4F4F4 0%, rgba(34, 88, 134, 0.674194) 27.6%, #225886 100%)"}>
            <SimpleGrid columns={[1,2,3,3]} textAlign="start">
                <VStack m="2%" 
                 alignItems={"start"} pl="2%" justifyContent={"start"}>
                    <Image src={img1} color="whiteAlpha.700" h="50px"></Image>
                    <Text>Call Now</Text>
                    <Heading color={"white"}>+91 123456789</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore. </Text>
                </VStack>
                <VStack m="2%"
                alignItems={"start"} pl="2%" justifyContent={"start"}>
                    <Text>Our Address</Text>
                    <Heading color={"white"}>UNITED KINGDOM</Heading>
                    <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.</Text>
                    <Text fontFamily={'bold'} color={"white"} fontSize={18}>info@loremipsum.com</Text>
                </VStack>
                <VStack m="2%">
                    <Text>FOLLOW US</Text>
                    <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.</Text>
                    <HStack w="100%" color={'white'}>
                        <Icon as={AiOutlineFacebook} boxSize="44px"></Icon>
                        <Icon as={AiFillTwitterSquare} boxSize="44px"></Icon>
                        <Icon as={AiOutlineInstagram} boxSize="44px"></Icon>
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