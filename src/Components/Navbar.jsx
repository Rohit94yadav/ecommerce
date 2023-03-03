import { Box, HStack, Image, Text, Icon, useDisclosure, Input, Button, VStack } from '@chakra-ui/react'
import React from 'react'
import image1 from "../Images/image 1.svg"
import v1 from "../Images/Vector.png"
import v2 from "../Images/Vector12.png"
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

const Navbar = () => {

  let NavArr=["HOME","BRANDS","MEN","WOMEN","LEATHER","FOOTWEAR","HOME DECOR", "VENDOR/BUYER", "FRESH STOCKS"]
  let Company_Name="Company Name"
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box >
         <HStack>
         {/* <HStack> */}
          <Box  mt="2%" w={["85%","90%","80%","80%"]} pl="12%">
          <Image m="auto" src={image1} 
          // top="18px" left="786.79px" 
          // w="27.09px" h="22.07px" position="absolute"
          ></Image>
          <Text  
          fontFamily="Georgia, serif" 
          // top="40px" left="738.19px"
          //  w="123px" h="19px" position="absolute"
           >{Company_Name}</Text>
           {/* <HStack border="2px solid #ccc"> */}
            {/* <Image src={v2}></Image> */}
            <Image src={v1} m="auto"></Image>
            {/* <Image src={v2}></Image> */}
           {/* </HStack> */}
          </Box>
          <HStack justifyContent={"space-around"} display={["none","none","flex","flex"]}>
             <Icon  as={Search2Icon} boxSize={5}></Icon>
             <Icon as={BsBag} boxSize={5} />
             <Icon as={TiMessages} boxSize={5} />
             <Icon as={CgProfile} boxSize={5} />
          </HStack>
          <Icon as={GiHamburgerMenu} boxSize={5} onClick={onOpen} display={["block","block","none","none"]}/>
          {/* <GiHamburgerMenu onClick={onOpen} boxSize={6} display={["block","block","none","none"]}></GiHamburgerMenu> */}
          <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#ccc">
          <DrawerCloseButton />
          <DrawerHeader m="auto" w="77%">
            {/* {Company_Name} */}
          <HStack justifyContent={"space-around"} w="100%"
           display={["flex","flex","none","none"]}>
             <Icon  as={Search2Icon} boxSize={5}></Icon>
             <Icon as={BsBag} boxSize={5} />
             <Icon as={TiMessages} boxSize={5} />
             <Icon as={CgProfile} boxSize={5} />
          </HStack>
          </DrawerHeader>

          <DrawerBody>
          <VStack m="auto" h="77vh" display={["flex","flex","none","none"]} justifyContent="space-between" w='80%'>
             {NavArr?.map((e)=><Text fontFamily="montserrat" fontWeight="bold">{e}</Text>)}
         </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' m="auto" bg="blue.700"  onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          </HStack>
         {/* </HStack> */}
         <HStack m="auto" mt="2%" display={["none","none","flex","flex"]} justifyContent="space-between" w='80%'>
             {NavArr?.map((e)=><Text fontWeight="bold">{e}</Text>)}
         </HStack>
      </Box>
    </>
  )
}

export default Navbar