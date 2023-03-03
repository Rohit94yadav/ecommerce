import { Box, Button, Heading, HStack, Text,Icon, Image, SimpleGrid, VStack, Flex } from '@chakra-ui/react'
import React from 'react'
import Carousels from './Carousels'
import img0 from "../Images/image 26-0.png"
import img1 from "../Images/image 26-1.png"
import img2 from "../Images/image 26-2.png"
import img3 from "../Images/image 26-3.png"
import img4 from "../Images/image 26-4.png"
import img00 from "../Images/image 4.png"
import img01 from "../Images/image 5.png"
import img02 from "../Images/image 6.png"
import img03 from "../Images/image 7.png"
import img04 from "../Images/image 8.png"
import imgC1 from "../Images/imgC1.png"
import imgC2 from "../Images/imgC2.png"
import imgC3 from "../Images/imgC3.png"
import imgC4 from "../Images/imgC4.png"
import imgC5 from "../Images/imgC5.png"
import IND from "../Images/IND.png"
import USA from "../Images/USA.png"
import UK from "../Images/UK.png"
import CHN from "../Images/CHN.png"
import AUS from "../Images/AUS.png"
import blog1 from "../Images/Rectangle 19-0.png"
import blog2 from "../Images/Rectangle 19-1.png"
import blog3 from "../Images/Rectangle 19-2.png"
import {AiOutlineArrowRight} from "react-icons/ai"

const BrandSection = () => {

    let brandsImgs=[img00,img01,img02,img03,img04];
    let vendors=[
        {src:IND,name:"IND"},
        {src:USA,name:"USA"},
        {src:UK,name:"UK"},
        {src:AUS,name:"AUS"},
        {src:CHN,name:"CHINA"},
    ];



    
    let items= [
        {
            img:img0,
            discount:"-20%",
            category:"Mens Shoes",
            title:"BasketBall Sports Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        },
        {
            img:img1,
            discount:"HOT",
            category:"Mens Shoes",
            title:"Gentle Casual Blue Shoes",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img2,
            discount:"-20%",
            category:"Mens Belt",
            title:"Mens Belt Set",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img3,
            discount:"-20%",
            category:"Mens Bag",
            title:"Mens Sports Travel Bag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐⭐",
            btnText:"SELECET OPTIONS"  
        },
        {
            img:img4,
            discount:"-20%",
            category:"Womens Purse",
            title:"Women Casual HandBag",
            price:"$101.00 - $111.00",
            star:"⭐⭐⭐⭐",
            btnText:"ADD TO CART"  
        }
      ]

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

    let categoriesArr=["All","MEN","WOMEN","BRANDS","LEATHER","FOOTWEAR","HOME DECOR"]

  return (
    <>
        <Text mt="5%">BRANDS SECTION</Text>
        <Heading color="blue.700">EXECUTIVE SECTION</Heading>
        <Box w="80%" m="auto" display={"flex"} mt="1%" mb="3%">
        <Text>Categories:  </Text>
        <SimpleGrid  columns={[2,2,3,7]} w="80%" m="auto" justifyContent={"center"}>
          
            {categoriesArr?.map((e)=>
                <Box m="2%" bg="#ccc" color="white" fontWeight={"400"} 
                p="5px" borderRadius="12px">
                    {e}
                </Box>
            )}
        </SimpleGrid>
        </Box>

        <Box w="80%" m="auto" >
        <Carousels items={items}></Carousels>
        </Box>

        <Button mt="2%" bg="blue.700">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
   
        <Text mt="5%">BRANDS SECTION</Text>
        <Heading color="blue.700">OUR BEST VENDOR</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam.</Text>
    
         <SimpleGrid pl="2%" columns={[2,2,3,5]} w="80%"
          m="auto" 
         display={'grid'}
         alignItems={"center"}  justifyContent={"space-evenly"} >
            {brandsImgs?.map((e)=>
                <Image src={e} m="2%" ></Image>
            )}
         </SimpleGrid>
    
         <Button mt="2%" bg="blue.700">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
    
         <Text mt="5%">RECOMMENDED FOR YOU</Text>
        <Heading color="blue.700" mb="2%">BEST PRODUCTS</Heading>

        <Box w="80%" m="auto" >
        <Carousels items={items}></Carousels>
        </Box>
        

        <Button mt="2%" bg="blue.700">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
    
          {/* VENDORS SEC */}
          
          <VStack w="80%" m="auto" mb="2%" textAlign={"start"} alignItems="start" justifyContent="start">
            <Text mt="5%">Lorem, ipsum dolor.</Text>
            <Heading color="blue.700" >VENDORS SECTION</Heading>
          </VStack>
          <SimpleGrid columns={[2,2,3,5]} w="80%" m="auto" 
            alignItems={"center"}  justifyContent={"center"} >
            {vendors?.map((e)=>
                <Box m="2%" 
                // bgImage={e.src} borderRadius="11px" h="177px" 
                //  alignItems={"center"} justifyContent="center"
                 >
                    <Image src={e.src} w="100%" h="100%"></Image>
                    <Heading 
                    position={"relative"} 
                    top={["-111px","-144px","-144px","-144px"]} 
                    fontFamily="bold" color="whiteAlpha.900" fontSize={44}>{e.name}</Heading>
                </Box>
            )}
         </SimpleGrid>

         {/* BLOGS */}

         <Text>ABOUT OUR BLOGS</Text>
        <Heading color="blue.700" mb="2%">LATEST BLOGS</Heading>
        <SimpleGrid  columns={[1,1,2,3]} w="80%" m="auto"
            alignItems={"center"} mb="2%" justifyContent={"center"} >
            {blogsData?.map((e)=>
            <Box m="3%">
                <Image src={e.img} w='100%'></Image>
                <Flex>
                    <VStack w="20%" mt="2%">
                         <Text w="100%" p="2%" mb="-10px" bg="#ccc" fontFamily={"bold"}>{e.date}</Text>
                         <Text w="100%" p="2%" bg="black" color="white" fontFamily={"bold"}>{e.month}</Text>
                    </VStack>
                    <VStack>
                        <Heading color="blue.700" mb="2%">{e.title}</Heading>
                        <HStack justifyContent={"start"} textAlign="start" w="100%">
                            {e.categories?.map((el)=>
                            <Text color="salmon" fontFamily={'bold'} textAlign="start">{el}</Text>
                            )}
                        </HStack>
                        <Text textAlign={"start"}>{e.description}</Text>
                        <Text fontWeight={"bold"}>Read More</Text>
                        <Button  bg="blue.700">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
                    </VStack>
                </Flex>
            </Box>
                
            )}
         </SimpleGrid>
    </>
  )
}

export default BrandSection