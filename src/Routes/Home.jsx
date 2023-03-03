import { Box, Button, Divider,Icon, Grid, GridItem, Heading, HStack, Image, Text, Flex, Input, Select } from '@chakra-ui/react'
import React from 'react'
import r24 from "../Images/Rectangle 24.jpg"
import r27 from "../Images/Rectangle 27.png"
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import BrandSection from '../Components/BrandSection'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>
    {/* <Text>Hello</Text> */}
       <Grid  w="80%" 
       gap={"2%"} m="auto" mt="3%" 
       templateRows={["repeat(12,1fr)","repeat(12,1fr)","repeat(12,1fr)","repeat(6,1fr)"]} 
       templateColumns={["repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(6,1fr)"]}>
        <GridItem colSpan={3} rowSpan={6} textAlign="start">
          <Image borderRadius={"10px"} src={r24} w="100%" h="100%"></Image>
          <Box w="100%" h="80%"  position="relative" bottom="82%" pl="7%" color="white">
          <Heading  fontSize={[25,25,33,40]}>Lorem ipsum <br></br>dolor sit amet.</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing.</Text>
            <Button color={"#B1CCDF"} border="2px solid" mt="3%" borderColor="#B1CCDF" bg="transparent">Buy Now</Button>
          </Box>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={4} bg="#3166B6" color="white">
        <Divider orientation='horizontal' w="90%" m="auto" mt="50%" h="0px" border="2px dashed white" color="white"/>
           <Heading fontSize={[20,22,25,30]}>FASTER <br /> DELEVERIES</Heading>
        <Divider orientation='horizontal' w="90%" m="auto"  h="0px" border="2px dashed white" color="white"/>
          <Text>ENJOT YOUR MOST SHORTER DELEVERY PROGRAM SUITS TO YOU</Text>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={6} bg="#282828" color="white"
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
        <Image borderRadius={"10px"} src={r27} w="100%" h="80%"></Image>
        <Heading fontSize={[16,18,20,22]}>NEWEST<br />FASHION</Heading>
              <Text fontSize={[10,12,14,16]}>ALL OUR PRE ORDERS ARE NEWEST DESIGN AT YOUR DOORSTEP</Text>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={2} 
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" 
        bg='#225886' color="white">
        <Heading fontSize={[16,18,20,22]}>FOLLOW US</Heading>
        <HStack>
          <Icon as={AiOutlineFacebook} boxSize={5}></Icon>
          <Icon as={AiFillTwitterSquare} boxSize={5}></Icon>
          <Icon as={AiOutlineInstagram} boxSize={5}></Icon>
        </HStack>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={1} bg='#B1CCDF' 
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Heading fontSize={[16,18,20,22]}>LOGISTICS</Heading>
              <Text fontSize={[10,12,14,16]}>99% SATISFACTION GUAREENTEE!</Text>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} pt="33%" rowSpan={3} bg='#F1823A' color="white"
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Heading fontSize={[14,16,18,20]}>CUSTOM <br /> MANUFACTURING</Heading>
              <Text fontSize={[10,12,14,16]}>PROMINANAT BRANDS<br /> TRUSTNG ON OUR<br /> MANUFACTURING PRODUCTS <br />AND DELEVERY</Text>
              <Divider display={"block"} orientation='horizontal' w="90%" m="auto" mt="5%" h="0px" border="2px dashed white" color="white"/>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={2} bg='#F65328' color="white"
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Divider orientation='horizontal' w="90%" m="auto" mt="5%" h="0px" border="2px solid white" color="white"/>
              <Heading fontSize={[16,18,20,22]}>WE WILL BEAT <br /> ANY PRICE</Heading>
              <Text fontSize={[10,12,14,16]}>WE GUAREENTEE ALL GLOBALLY COMPITATIVE PRICING</Text>
              <Divider orientation='horizontal' w="90%" m="auto"  h="0px" border="2px dashed white" color="white"/>
        </GridItem>

       </Grid>

       {/* 2nd  */}

       <Flex w="80%" 
       gap={"2%"} m="auto" mt="7%" 
       flexDirection={["column","column","column","row"]}> 
       <iframe width="100%" height="377px" 
       src="https://www.youtube.com/embed/mReZr_e70OA" 
       title="YouTube video player" frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>
       
       <FormControl>
        <Heading>Lorem ipsum dolor sit.</Heading>
        <Grid templateColumns={"repeat(2,1fr)"} gap="2%">
          <GridItem >
              <Input borderBottom="2px" type='text' variant='flushed' placeholder='Name*'/>
              <Input borderBottom="2px" type='text' variant='flushed' placeholder='Phone No.'/>
              <Input borderBottom="2px" type='text' variant='flushed' placeholder='Category'/>
              <Select mt="10%" variant='unstyled' placeholder="Comments*" border="0px">

              </Select>
          </GridItem>
          <GridItem >
              <Input borderBottom="2px" type='text' variant='flushed' placeholder='Email*'/>
              <Input borderBottom="2px" type='text' variant='flushed' placeholder='Product.'/>
              <Input borderBottom="2px" type='text' variant='flushed'  placeholder='Size'/>
              <Select variant='unstyled' mt="10%" border="0px">

              </Select>
          </GridItem>
          <textarea rows="4" cols="100" width="100%">

          </textarea>
        </Grid>
        <HStack><Button bg="blue.700">SEND</Button></HStack>
      </FormControl>

       </Flex>

       {/* Brand-Section */}

       <BrandSection></BrandSection>

       {/* Footer */}

       <Footer/>

    </>
  )
}

export default Home