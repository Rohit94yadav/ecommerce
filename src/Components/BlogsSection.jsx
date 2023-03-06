import React from 'react'
import { Box, 
    Button,
     Heading, 
     HStack, 
     Text,
     Icon, 
     Image, 
     SimpleGrid, 
     VStack, 
     Flex } from '@chakra-ui/react'
import {AiOutlineArrowRight} from "react-icons/ai"     
import blog1 from "../Images/Rectangle 19-0.png"
import blog2 from "../Images/Rectangle 19-1.png"
import blog3 from "../Images/Rectangle 19-2.png"
import BlogsDescription from './BlogsDescription'
import { useState } from 'react'
import { useEffect } from 'react'

const BlogsSection = () => {

    const [moreDisplay,setMoreDisplay]=useState("none");
    const [btnDisplay,setBtnDisplay]=useState("block");
    const [moreDisplayStatus,setMoreDisplayStatus]=useState(false)

let blogsData=[
    {
        img:blog1,
        title:"Lorem ipsum dolor sit amet",
        date:"28",
        month:"Nov",
        categories:["MENS,","SHIRT,","DENIMS"],
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam."
    },
    {
        img:blog2,
        title:"Lorem ipsum dolor sit amet",
        date:"16",
        month:"Nov",
        categories:["MENS,","TSHIRT,"],
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam."
    },
    {
        img:blog3,
        title:"Lorem ipsum dolor sit amet",
        date:"08",
        month:"Nov",
        categories:["WOMEN,","DENIM,","TSHIRT"],
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam."
    },
]

const handleDisplay=()=>{
    setMoreDisplayStatus(!moreDisplayStatus)
    setBtnDisplay("none")
 }

 useEffect(()=>{
    moreDisplayStatus?setMoreDisplay("grid"):setMoreDisplay("none");
 },[moreDisplayStatus,handleDisplay])

  return (
    <>
        <Text 
        mt="5%"
        fontSize={"15px"} 
        textTransform="uppercase"
        fontFamily={"Montserrat"}
        color={"#282828"} 
        letterSpacing="0.05em" 
        lineHeight={"38px"}
        fontWeight="500" 
        textAlign={"center"}>ABOUT OUR BLOGS</Text>
        <Heading m="auto" mb="2%"
        fontFamily={"Montserrat"} 
        fontSize={"30px"} 
        textTransform="uppercase"
        color={"#225886"} 
        lineHeight={"37px"}
        fontWeight="800" 
        textAlign={"center"}>LATEST BLOGS</Heading>
        <SimpleGrid  columns={[1,1,2,3]} w="80%" m="auto"
            alignItems={"center"} mb="2%" justifyContent={"center"} >
            {blogsData?.map((e,i)=>
            <Box key={i} m="3%">
                <Image src={e.img} w='100%'></Image>
                <Flex>
                    <VStack mt="2%">
                    <Text w="34px" h="28px"  mb="-10px" bg="#D9D9D9" fontFamily={"bold"}>{e.date}</Text>
                         <Text w="34px" h="22px"  bg="#282828" color="white" fontFamily={"bold"}>{e.month}</Text>
                    </VStack>
                    <VStack alignItems={'start'} 
                    justifyContent="start" pl="2%" w="80%" >
                        <Heading mt="2%"
                        fontFamily={"Montserrat"} 
                        fontSize={"16px"} 
                        textTransform="uppercase"
                        color={"#225886"} 
                        lineHeight={"20px"}
                        fontWeight="700" 
                        textAlign={"start"} mb="2%">{e.title}</Heading>
                        <HStack justifyContent={"start"} 
                        textAlign="start" w="100%">
                            {e.categories?.map((el)=>
                            <Text 
                            color="#F65328" 
                            fontWeight={'700'}
                            fontSize={"12px"}  textAlign="start">{el}</Text>
                            )}
                        </HStack>
                        <BlogsDescription  desc={e.description}></BlogsDescription>
                    </VStack>
                </Flex>
            </Box>
                
            )}
         </SimpleGrid>

         <SimpleGrid display={moreDisplay} columns={[1,1,2,3]} w="80%" m="auto"
            alignItems={"center"} mb="2%" justifyContent={"center"} >
            {blogsData?.map((e,i)=>
            <Box key={i} m="3%">
                <Image src={e.img} w='100%'></Image>
                <Flex>
                    <VStack mt="2%">
                         <Text w="34px" h="28px"  mb="-10px" bg="#D9D9D9" fontFamily={"bold"}>{e.date}</Text>
                         <Text w="34px" h="22px"  bg="#282828" color="white" fontFamily={"bold"}>{e.month}</Text>
                    </VStack>
                    <VStack alignItems={'start'} pl="2%" w="80%" >
                        <Heading mt="2%"
                        fontFamily={"Montserrat"} 
                        fontSize={"16px"} 
                        textTransform="uppercase"
                        color={"#225886"} 
                        lineHeight={"20px"}
                        fontWeight="700" 
                        textAlign={"start"} mb="2%">{e.title}</Heading>
                        <HStack justifyContent={"start"} 
                        textAlign="start" w="100%">
                            {e.categories?.map((el,i)=>
                            <Text key={i} color="#F65328" 
                            fontWeight={'700'}
                            fontSize={"12px"} 
                            textAlign="start">{el}</Text>
                            )}
                        </HStack>
                        <BlogsDescription desc={e.description}></BlogsDescription>
                    </VStack>
                </Flex>
            </Box>
                
            )}
         </SimpleGrid>
         <Button m="auto" display={btnDisplay} onClick={handleDisplay} mb="2%" bg="blue.700" >View More <Icon as={AiOutlineArrowRight}></Icon></Button>
    </>
  )
}

export default BlogsSection