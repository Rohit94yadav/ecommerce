import { Box,
HStack,
Image,
Text,
Icon,
useDisclosure,
Input,
 Button,
VStack } from '@chakra-ui/react'
import React from 'react'
import image1 from "../Images/image 1.svg"
import v1 from "../Images/Vector.png"
import { Search2Icon } from '@chakra-ui/icons'
import { TiMessages } from 'react-icons/ti'
import { BsBag } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import "@fontsource/cinzel-decorative";
import { useState } from 'react'

const Navbar = () => {

  const [currentRoute,setCurrentRoute]=useState("/")
  const { isOpen, onOpen, onClose } = useDisclosure()
  let NavArr=["HOME","BRANDS","MEN","WOMEN","LEATHER","FOOTWEAR","HOME DECOR", "VENDOR/BUYER", "FRESH STOCKS"]
  let routesArr=["/","/brands","/men","/women","/leather","/footwear","/homedecor","/vendor","/freshstocks"]
  let Company_Name="Company Name"
  const btnRef = React.useRef();
  const [searchDisplay,setSearchDisplay]=useState("none");

  const handleSearch=()=>{
    searchDisplay=="none"?setSearchDisplay("inline-block"):setSearchDisplay("none")
  }

  const handleRoute=(route)=>{
    setCurrentRoute(route)
    console.log(currentRoute)
  }

  return (
    <>
      <Box m="auto" w="80%" mt="2%" mb="2%"
          position="relative">
         <HStack  w="100%">
          <Box  m={["2%","2%","2%","auto"]} mt="1%" mb="1%">
            <Image m="auto" src={image1} w={"27.09px"} h="22.07px" ></Image>
            <Text mt="5%" mb="2%"
            w="123px" 
            h="19px"
            fontFamily="Cinzel Decorative" 
            textAlign={"center"} 
            color={"#282828"} 
            fontSize="14.2257px" 
            lineHeight={"19px"}>{Company_Name}</Text>
            <Image src={v1} m="auto" ></Image>
          </Box>
          <Input w={["40%","50%","50%","22%"]} m="auto"
              display={["none","none",searchDisplay,searchDisplay]}
              placeholder="Search" borderRadius={"7px"}
              position="absolute" size={'sm'} border="2px solid #ccc"
              right={["10%","25%","25%","15%"]}></Input>
          <HStack
              alignItems={"center"} position="absolute" 
              right={["10%","7%","5%","0%"]}
              justifyContent={"space-around"} 
              display={["flex","flex","flex","flex"]}>
             <Icon  as={Search2Icon} boxSize={5} 
             onClick={handleSearch}></Icon>
             <Icon as={BsBag} boxSize={[4,5,5,5]} />
             <Icon as={TiMessages} boxSize={[4,4,5,5]} />
             <Icon as={CgProfile} boxSize={[4,4,5,5]} />
          </HStack>
          <Icon position="absolute" right="0%"
              as={GiHamburgerMenu} boxSize={5} 
              onClick={onOpen} 
              display={["block","block","block","none"]}/>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent bg="#ccc">
              <DrawerCloseButton />
              <DrawerHeader m="auto" w="100%" >
                <Text 
                w="123px" m="auto" mt="5%"
                h="19px"
                fontFamily="Cinzel Decorative" 
                textAlign={"center"} 
                color={"#282828"} 
                fontSize="20.2257px" 
                lineHeight={"19px"}>
                {Company_Name}
                </Text>
              </DrawerHeader>

              <DrawerBody h="77vh">
              <VStack m="auto" h="100%"
                 alignItems={'center'} display={["flex","flex","flex","none"]} 
                 justifyContent="space-around" w='80%'>
                {NavArr?.map((e,i)=>
                <Link to={currentRoute}>
                <Text key={i} 
                onClick={()=>handleRoute(routesArr[i])}
                color={currentRoute==routesArr[i]?"#225886":""}
                textDecoration={currentRoute==routesArr[i]?"underline":""}
                fontFamily={"Montserrat"} 
                fontWeight="bold">{e}</Text>
                </Link>
                )}
              </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' m="auto" bg="blue.700"  
                onClick={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </HStack>
        <HStack m="auto" mt="1%"  
            display={["none","none","none","flex"]} 
            justifyContent="space-between" w='100%'>
            {NavArr?.map((e,i)=>
            
            <Text key={i} 
            color={currentRoute==routesArr[i]?"#225886":""}
            textDecoration={currentRoute==routesArr[i]?"underline":""}
             fontSize={{md:"14px",lg:"16px"}} h="20px"  fontFamily={"Montserrat"} 
            fontWeight="800" lineHeight={"20px"}
            onClick={()=>handleRoute(routesArr[i])}>
             <Link to={currentRoute} >
             {e}
             </Link>
              </Text>
              
            )}
        </HStack>
        <Input w="100%" m="auto" size={'sm'} placeholder="Search"
              mt="0.5%" mb="0.5%" border="2px solid #ccc" borderRadius={"7px"}
              display={[searchDisplay,searchDisplay,"none","none"]}>
        </Input>
      </Box>
       
    </>
  )
}

export default Navbar