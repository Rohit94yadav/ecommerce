import React from 'react'
import r24 from "../Images/Rectangle 24.jpg"
import r27 from "../Images/Rectangle 27.png"
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { 
    Box, 
    Button, 
    Divider,
    Icon, 
    Grid, 
    GridItem, 
    Heading, 
    HStack, 
    Image, 
    Text,
    Flex,  } from '@chakra-ui/react'

const HomeSection1 = () => {
  return (
    <>
    <Grid  w="80%" 
       gap={"2%"} m="auto" mt="2%" color={"#FFFFFF"}
       templateRows={["repeat(10,1fr)","repeat(10,1fr)","repeat(12,1fr)","repeat(6,1fr)"]} 
       templateColumns={["repeat(3,1fr)","repeat(3,1fr)","repeat(3,1fr)","repeat(6,1fr)"]}>
        <GridItem colSpan={3} rowSpan={6} textAlign="start">
          <Image borderRadius={"10px"} src={r24} w="100%" h="100%"></Image>
          <Box w="100%" h="80%"  position="relative" bottom="82%" pl="7%" color="white">
          <Heading fontFamily={"Montserrat"} fontSize={["44","50","50","50.5296px"]} 
          fontWeight="800" w="85%" 
          >Lorem ipsum dolor sit amet.</Heading>
            <Text fontFamily={"Montserrat"}  fontSize={["18","20","20","20.2118px"]} 
          fontWeight="400" w="85%">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text fontFamily={"Montserrat"}  fontSize={["18","20","20","20.2118px"]} 
          fontWeight="400">Lorem ipsum dolor sit, amet consectetur adipisicing.</Text>
            <Button fontFamily={"Montserrat"} fontSize={["18","20","20","20.2118px"]} 
          fontWeight="700" color={"#B1CCDF"} border="2px solid" mt="3%" borderColor="#B1CCDF" bg="transparent">Buy Now</Button>
          </Box>
        </GridItem>

        <GridItem borderRadius={"8.77202px"} colSpan={1} 
        textTransform={"uppercase"}
            textAlign="center" 
            display={'flex'}
            flexDirection="column"
            justifySelf={'space-around'}
            alignItems={'center'}
        rowSpan={4} bg="#3166B6" color="white">
          <Flex display={'flex'}
            flexDirection="column"
            justify="center"
            alignItems={'center'} h="100%" >
        <Divider orientation='horizontal' 
        borderRadius={"8.77202px"}
         border="1.01059px dashed #FFFFFF" 
         position="relative" bottom="-77px"
         w="90%" m="auto" h="0px" />
           <Heading m="auto" w="90%" 
           position="relative" fontWeight={"800"} bottom="-25px"
           fontSize={["14px","18px","22px","25.2648px"]}>
            FASTER DELEVERIES
            </Heading>
        <Divider orientation='horizontal'
        borderRadius={"8.77202px"} position="relative" top="-25px"
        border="1.01059px dashed #FFFFFF"
         w="90%" m="auto"  h="0px"/>
          <Text m="auto" w="90%" fontSize={["9px","10px","11px","12.1271px"]} 
          position="relative" top="-77px"
           fontWeight={"700"} >ENJOT YOUR MOST SHORTER DELEVERY PROGRAM SUITS TO YOU</Text>
        </Flex>
        </GridItem>

        <GridItem borderRadius={"10px"} pb="3%"
         colSpan={1} rowSpan={6} backgroundColor="#282828" color="white"
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
        <Image borderRadius={"10px"} src={r27} w="100%" h="80%" ></Image>
        <Heading m="auto" w="90%" fontWeight={"800"} 
           fontSize={["16px","18px","22px","25.2648px"]}>NEWEST FASHION</Heading>
              <Text m="auto" w="90%"  fontSize={["9px","10px","11px","12.1271px"]} 
               fontWeight={"700"}>ALL OUR PRE ORDERS ARE NEWEST DESIGN AT YOUR DOORSTEP</Text>
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} rowSpan={2} 
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" 
        bg='#225886' color="white">
        <Heading m="auto" w="90%" 
            fontWeight={"800"} 
           fontSize={["16px","18px","22px","25.2648px"]}
             position={'relative'} bottom="-22px"
        >FOLLOW US</Heading>
        <HStack w="90%" m="auto" position={'relative'} bottom="22px"
         justifyContent={"center"}>
          <Icon as={AiOutlineFacebook} boxSize={[7,8,9,10]}></Icon>
          <Icon as={AiFillTwitterSquare} boxSize={[7,8,9,10]}></Icon>
          <Icon as={AiOutlineInstagram} boxSize={[7,8,9,10]}></Icon>
        </HStack>
        </GridItem>

        <GridItem pb="3%" borderRadius={"10px"} colSpan={1} rowSpan={1} bg='#B1CCDF' 
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Heading m="auto" w="90%" 
            fontWeight={"800"} 
           fontSize={["16px","18px","22px","25.2648px"]} >LOGISTICS</Heading>
              <span style={{fontSize:"16px",color:"#3166B6",fontWeight:"bold"}}>99%</span><Text
               m="auto" w="90%"
               fontWeight={"700"} 
               fontSize={["9px","10px","11px","12.1271px"]}> SATISFACTION GUAREENTEE!</Text>
        </GridItem>

        <GridItem textTransform={"uppercase"}
            textAlign="center"
        borderRadius={"10px"} colSpan={1} pt="33%" rowSpan={3} bg='#F1823A' color="white"
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Heading 
              m="auto" w="90%"
              fontWeight={"800"} 
              fontSize={["10px","12px","14px","16.1695px"]}
               >CUSTOM MANUFACTURING</Heading>
              <Text
               m="auto" 
               w="90%"
               fontSize={["9px","10px","11px","12.1271px"]} position="relative" top="-22px"
               fontWeight={"700"}>PROMINANAT BRANDS TRUSTNG ON OUR MANUFACTURING PRODUCTS <br />AND DELEVERY</Text>
              <Divider borderRadius={"8.77202px"}
              border="1.01059px solid #FFFFFF"
              position="relative" top="-40px"
              w="90%" m="auto" h="0px"
               orientation='horizontal' 
               />
        </GridItem>

        <GridItem borderRadius={"10px"} colSpan={1} pb="3%"
        rowSpan={2} bg='#F65328' color="white" 
        display="flex" justifyContent={"center"} 
        flexDirection={"column"} alignItems="center" >
              <Divider  orientation='horizontal'
              borderRadius={"8.77202px"}
              border="1.01059px solid #FFFFFF"
              w="90%" m="auto" h="0px"/>
              <Heading m="auto" w="90%" 
            fontWeight={"800"} 
           fontSize={["16px","18px","22px","25.2648px"]}
           >WE WILL BEAT ANY PRICE</Heading>
              <Text 
              m="auto" 
              w="90%"
              fontSize={["9px","10px","11px","12.1271px"]} 
              fontWeight={"700"}
           >WE GUAREENTEE ALL GLOBALLY COMPITATIVE PRICING</Text>
              <Divider orientation='horizontal' 
        borderRadius={"8.77202px"}
         border="1.01059px dashed #FFFFFF"
         w="90%" m="auto" h="0px"/>
        </GridItem>

    </Grid>
    </>
  )
}

export default HomeSection1