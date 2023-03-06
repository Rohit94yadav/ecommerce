import { Box, 
    Button,
     Heading, 
     Text,
     Icon, 
     Image, 
     SimpleGrid,  
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import {AiOutlineArrowRight} from "react-icons/ai"

const BrandSection = () => {

    const [moreDisplay,setMoreDisplay]=useState("none");
    const [btnDisplay,setBtnDisplay]=useState("block");
    const [moreDisplayStatus,setMoreDisplayStatus]=useState(false)
    const [moreDisplay2,setMoreDisplay2]=useState("none");
    const [btnDisplay2,setBtnDisplay2]=useState("block");
    const [moreDisplayStatus2,setMoreDisplayStatus2]=useState(false);
    const [category,setCategory]=useState("All")

    let brandsImgs=[img00,img01,img02,img03,img04];
    let xtraBrandsImgs=[img01,img02,img03,img00,img01];
    
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

      let xtraItems= [
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

  let categoriesArr=["All","MEN","WOMEN","BRANDS","LEATHER","FOOTWEAR","HOME DECOR"]

  const handleDisplay=()=>{
    setMoreDisplayStatus(!moreDisplayStatus)
    setBtnDisplay("none")
 }

 const handleDisplay2=()=>{
    setMoreDisplayStatus2(!moreDisplayStatus2)
    setBtnDisplay2("none")
 }

 const handleCategory=(e)=>[
    setCategory(e)
 ]

 useEffect(()=>{
    moreDisplayStatus?setMoreDisplay("block"):setMoreDisplay("none");
    moreDisplayStatus2?setMoreDisplay2("grid"):setMoreDisplay2("none");
 },[moreDisplayStatus,handleDisplay,moreDisplayStatus2,handleDisplay2])

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
        textAlign={"center"}>
            BRANDS SECTION
        </Text>
        <Heading 
        fontFamily={"Montserrat"} 
        fontSize={["20px","22px","25px","30px"]} 
        textTransform="uppercase"
        color={"#225886"} 
        letterSpacing="0.05em" 
        lineHeight={"37px"}
        fontWeight="800" 
        textAlign={"center"}>
            EXECUTIVE SECTION
        </Heading>
        <Box
        w="80%" m="auto"
        display={"flex"} 
        alignItems={'center'} 
        justifyContent={"start"}
        mt="1%" mb="3%"
        >
        <Text fontSize={12} fontWeight="400" color="#AAAAAA" mr="1%">Categories:</Text>
        <SimpleGrid spacingX={"10px"} 
         columns={[2,2,3,7]} w="90%" 
        alignItems={'center'} 
        justifyContent={"center"} >
            {categoriesArr?.map((e,i)=>
                <Box key={i} 
                mt="5px" mb="5px"
                backgroundColor={category==e?"#225886":"#D0D0D0"} 
                display={"flex"}
                justifyContent={"center"} 
                alignItems={'center'}
                p="5px 5px"
                color="#FFFFFF" 
                fontSize={["12px","14px","16px","18px"]}
                fontWeight={"400"} 
                 borderRadius="10px"
                 fontFamily={"Montserrat"}
                 onClick={()=>handleCategory(e)}>
                    {e}
                </Box>
            )}
        </SimpleGrid>
        </Box>

        <Box w="80%" m="auto">
        <Carousels items={items}></Carousels>
        </Box>
        <Box display={moreDisplay} w="80%" m="auto" mt="5%">
        <Carousels  items={xtraItems}></Carousels>
        </Box >

        <Button 
        m="auto" 
        color={"#FFFFFF"} 
         fontSize={"15px"} 
         fontWeight="700"
        display={btnDisplay} 
        onClick={handleDisplay} 
        w="173px" h="33px"
        borderRadius={"2px"}
        mt="2%" bg="#225886">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
   
        <Text mt={["12%","10%","7%","5%"]}
        fontFamily={"Montserrat"} 
        fontSize={"15px"} 
        textTransform="uppercase"
        color={"#282828"} 
        letterSpacing="0.05em" 
        lineHeight={"18px"}
        fontWeight="800" 
        textAlign={"center"}>BRANDS SECTION</Text>
        <Heading 
        fontFamily={"Montserrat"} 
        fontWeight="800" 
        fontSize={["20px","22px","25px","30px"]} 
        lineHeight={"37px"}
        textAlign={"center"}
        color={"#225886"} 
        letterSpacing="0.05em"
        textTransform="uppercase" mt="1%" mb="1%"
        >OUR BEST VENDOR</Heading>
        <Text fontWeight="800" fontFamily={"Montserrat"} 
        fontSize={["20px","22px","25px","30px"]} 
        lineHeight={"37px"}
        textAlign={"center"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam.</Text>
    
         <SimpleGrid pl="2%" columns={[2,2,3,5]} w="80%"
          m="auto" 
         display={'grid'}
         alignItems={"center"}  justifyContent={"space-evenly"} >
            {brandsImgs?.map((e,i)=>
                <Image key={i} src={e} m="2%" w="165px" h="110px" ></Image>
            )}
         </SimpleGrid>
         <SimpleGrid display={moreDisplay2} pl="2%" columns={[2,2,3,5]} w="80%"
          m="auto" 
         alignItems={"center"}  justifyContent={"space-evenly"} >
            {xtraBrandsImgs?.map((e,i)=>
                <Image src={e} key={i} m="2%" ></Image>
            )}
         </SimpleGrid>
         <Button m="auto" 
         color={"#FFFFFF"} 
         fontSize={"15px"} 
         fontWeight="700"
         w="173px" h="33px"
         borderRadius={"2px"}
          display={btnDisplay2} onClick={handleDisplay2} 
          mt="2%" bg="#225886">View More <Icon as={AiOutlineArrowRight}></Icon></Button>
    </>
  )
}

export default BrandSection