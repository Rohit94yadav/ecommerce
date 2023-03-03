import { Box, HStack, Image, Text, Icon, useDisclosure, Input, Button, VStack } from '@chakra-ui/react'
import React from 'react'
import image1 from "../Images/image 1.svg"
import v1 from "../Images/Vector.png"
import { Search2Icon } from '@chakra-ui/icons'
import { TiMessages } from 'react-icons/ti'
import { BsBag } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

const Navbar2 = () => {

  let NavArr=["HOME","BRANDS","MEN","WOMEN","LEATHER","FOOTWEAR","HOME DECOR", "VENDOR/BUYER", "FRESH STOCKS"]
  let Company_Name="Company Name"
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box border="2px solid #ccc" >
         <HStack>
          <Box  mt="2%" border="2px solid #ccc" w={["70%","70%","80%","80%"]} pl="12%">
          <Image m="auto" src={image1} ></Image>
          <Text  
          fontFamily="Georgia, serif" 
           >{Company_Name}</Text>
            <Image src={v1} m="auto"></Image>
          </Box>
          <HStack border="2px solid #ccc" justifyContent={"space-around"} >
             <Icon  as={Search2Icon} boxSize={5}></Icon>
             <Icon as={BsBag} boxSize={5} />
             <Icon as={TiMessages} boxSize={5} />
             <Icon as={CgProfile} boxSize={5} />
          </HStack>
          <Icon border="2px solid #ccc" as={GiHamburgerMenu} boxSize={5} onClick={onOpen} display={["block","block","none","none"]}/>
          <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{Company_Name}</DrawerHeader>

          <DrawerBody>
          <VStack m="auto" display={["flex","flex","none","none"]} justifyContent="space-between" w='80%'>
             {NavArr?.map((e)=><Text fontFamily="montserrat" fontWeight="bold">{e}</Text>)}
         </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' bg="#ccc" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          </HStack>
         <HStack m="auto" display={["none","none","flex","flex"]} justifyContent="space-between" w='80%'>
             {NavArr?.map((e)=><Text fontFamily="montserrat" fontWeight="bold">{e}</Text>)}
         </HStack>
      </Box>
    </>
  )
}

export default Navbar2